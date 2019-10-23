import {
  Directive,
  Component,
  ViewChild,
  OnInit,
  NgZone,
  OnDestroy
} from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from "../http.service";
import {} from "googlemaps";
import { UserLocationService } from "../services/user-location.service";
import { AutoSearchComponent } from "../auto-search/auto-search.component";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "create-report",
  styles: ["agm-map { height: 35vh;}"],
  styleUrls: ["./CreateReport.scss"],
  templateUrl: "./CreateReport.html"
})
export class CreateReport implements OnInit {
  @ViewChild(AutoSearchComponent, { static: true }) AutoSearch: any;
  markers;
  // [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}, {lat: 29.9770, lng: -90.0797773}, {lat: 29.9699, lng: -90.08}]
  lat;
  lng;
  currUser = "You Are Here!";
  otherUserMarker = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  report = {
    latLng: "",
    location: "",
    desc: "",
    img: "",
    time: new Date().toLocaleTimeString(),
    id: localStorage.getItem("userId")
  };

  constructor(
    private http: HttpService,
    private geo: UserLocationService,
    private NgZone: NgZone,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log("init location", this.geo.currLat, this.geo.currLng);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    this.markers = this.getReportCoords();
    this.report.latLng = this.lat + "," + this.lng;
  }
  
  ngOnChanges() {
    this.markers = this.getReportCoords();
  }

  getReportCoords() {
    // this.setMarkers();

    let markerArray = [];
    // format the reports to create an array of objects of coords:
    // [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}]
    this.http.dbReports.forEach(report => {
      // check if latlng is null. the db has some test data that has null
      if (report.latlng) {
        let reportCoords = report.latlng.split(",");
        markerArray.push({
          lat: reportCoords[0],
          lng: reportCoords[1],
          img: report.img,
          desc: report.description
        });
      }
    });
    return markerArray;
  }

  setMarkers() {
    // console.log("off click");
    // change the marker locations
    // this.lat = this.AutoSearch.lat || this.geo.currLat;
    // this.lng = this.AutoSearch.lng || this.geo.currLng;
    this.lat = this.AutoSearch.lat || this.geo.currLat;
    this.lng = this.AutoSearch.lng || this.geo.currLng;

    // update the report coords
    this.report.latLng = this.lat + "," + this.lng;
    this.report.location = this.AutoSearch.address;
  }

  processFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.report.img = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  createReport() {
    console.log(this.report);
    // // check if user is logged in
    if (this.report.id === "null") {
      Swal.fire("Please log in");
    }
    //user must have location
    else if (this.report.latLng === "undefined,undefined") {
      Swal.fire(
        "Oops...",
        "We can't find your location",
        "error"
      );
    } else {
      this.http.submitReport(this.report).subscribe(data => {
        // console.log(data);
      });
      Swal.fire(
        "Report sent!",
        "Thanks for helping your fellow New Orleanians. Stay safe out there!",
        "success"
      );
      this.router.navigate([""]);
      setTimeout(() => {location.reload(true)}, 2500);
    }
  }

  setLocation(place) {
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.report.latLng = this.lat + "," + this.lng;
    this.report.location = place.formatted_address;
  }

  moveReport(event) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: event.coords }, (res, status) => {
      if (status === google.maps.GeocoderStatus.OK && res.length) {
        this.NgZone.run(() => {
          this.setLocation(res[0]);
        });
      }
    });

    // console.log(this.lat, this.lng);
    // this.report.latLng = this.lat + "," + this.lng;
    // console.log(this.report);
    this.http.getAddress(this.report.latLng).subscribe(location => {
      // console.log(location);
      // this.report.location = location.data;
    });
  }
}
