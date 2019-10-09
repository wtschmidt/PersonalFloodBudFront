import { Directive, Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from "../http.service";
import {} from "googlemaps";
import { UserLocationService } from "../services/user-location.service";
import { AutoSearchComponent } from '../auto-search/auto-search.component'; 

@Component({
  selector: "create-report",
  styles: ['agm-map { height: 400px;}'],
  templateUrl: "./CreateReport.html",
})

export class CreateReport implements OnInit {

  @ViewChild(AutoSearchComponent, {static: true}) AutoSearch: any;
  markers;
  // [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}, {lat: 29.9770, lng: -90.0797773}, {lat: 29.9699, lng: -90.08}]
  lat;
  lng;
  currUser = 'You Are Here!';
  otherUserMarker = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  report = {
    latLng: this.geo.currLat + "," + this.geo.currLng,
    location: '',
    desc: '',
    img: '',
  }

  constructor(private http: HttpService, private geo: UserLocationService) { }

  ngOnInit() {
    console.log('testing', this.http.dbReports);
    this.markers = this.getReportCoords();
    console.log('init location', this.geo.currLat, this.geo.currLng);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
  }

  getReportCoords() {
    let markerArray = [];
    // format the reports to create an array of objects of coords:
    // [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}]
    this.http.dbReports.forEach(report => {
      // check if latlng is null. the db has some test data that has null
      if (report.latlng) {
        let reportArr = report.latlng.split(',');
        console.log(reportArr);
        markerArray.push({ lat: reportArr[0], lng: reportArr[1] });
      }
    });
    // change this later. the first object is formatted differently from the rest so exclude for now
    return markerArray.slice(1);
  }

  setMarkers() {
    console.log('off click');
    // change the marker locations
    this.lat = this.AutoSearch.lat || this.geo.currLat;
    this.lng = this.AutoSearch.lng || this.geo.currLng;

    // update the report coords
    this.report.latLng = this.lat + ',' + this.lng;
    this.report.location = this.AutoSearch.address;
  }

  createReport() {
    console.log(this.report);
    this.http.submitReport(this.report).subscribe(data => {
      console.log(data);
    });
  }
}
