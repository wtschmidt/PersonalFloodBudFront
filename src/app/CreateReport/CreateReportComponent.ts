import { Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from "../http.service";
import {} from "googlemaps";
import { UserLocationService } from "../services/user-location.service";

@Component({
  selector: "create-report",
  templateUrl: "./CreateReport.html"
})
export class CreateReport implements OnInit {
  @ViewChild("gmap", { static: true }) gmapElement: any;
  // @ViewChild(UserLocationComponent, {static: true}) geo;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  lat = 0;
  lng = 0;
  // description: string;
  // location: string;
  image: any;
  report = {
    latLng: this.geo.currLat + "," + this.geo.currLng,
    location: '',
    desc: '',
    img: this.image,
  }

  constructor(private http: HttpService, private geo: UserLocationService) {}

  ngOnInit() {
    this.geo.getLocation();
    var mapProp = {
      zoom: 8,
      center: new google.maps.LatLng(29.95, -90.05)
    };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    console.log("CLICK CLICK BOOM", this.lat);
    console.log("CLICK CLICK BOOM GEo", this.geo.currLat);

    // this.geo.getLocation();
    // console.log(this.geo.currLat);
    // this.latLng = {lat: this.geo.currLat, lng: this.geo.currLng};

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      map: new google.maps.Map(this.gmapElement.nativeElement, {
        zoom: 14,
        center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng)
      }),
      title: "Save us... bitch!"
    });
  }

  createReport() {
    this.http.submitReport(this.report).subscribe(data => {
      console.log(data);
    });
  }

  getCurrentLocation() {
    // this.lat = this.geo.currLat;
    // this.lng = this.geo.currLng;
    // console.log("CLICK CLICK BOOM", this.lat);
    // console.log("CLICK CLICK BOOM GEo", this.geo.currLat);
    // // this.geo.getLocation();
    // // console.log(this.geo.currLat);
    // // this.latLng = {lat: this.geo.currLat, lng: this.geo.currLng};
    // this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   map: new google.maps.Map(this.gmapElement.nativeElement, {
    //     zoom: 18,
    //     center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   }),
    //   title: 'Save us... bitch!'
    // });
  }
}
