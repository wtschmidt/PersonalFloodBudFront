import { Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from "../http.service";
import {} from "googlemaps";
import { UserLocationService } from "../services/user-location.service";
import { AutoSearchComponent } from '../auto-search/auto-search.component'; 

@Component({
  selector: "create-report",
  styles: ['agm-map { height: 400px;}'],
  templateUrl: "./CreateReport.html"
})
export class CreateReport implements OnInit {

  @ViewChild(AutoSearchComponent, {static: true}) AutoSearch: any;
  markers = [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}, {lat: 29.9770, lng: -90.0797773}, {lat: 29.9699, lng: -90.08}]
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
    console.log('init location', this.geo.currLat, this.geo.currLng);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
  }

  setMarkers() {
    console.log('off click');
    // change the marker locations
    this.lat = this.AutoSearch.lat;
    this.lng = this.AutoSearch.lng;

    // update the report coords
    this.report.latLng = this.AutoSearch.lat + ',' + this.AutoSearch.lng;
    this.report.location = this.AutoSearch.address;
  }

  createReport() {
    console.log(this.report);
    this.http.submitReport(this.report).subscribe(data => {
      console.log(data);
    });
  }

  // currLat: number;
  // currLng: number;
  // description: string;
  // location: string;
  // @ViewChild("gmap", { static: true }) gmapElement: any;
  // // @ViewChild(UserLocationComponent, {static: true}) geo;
  // directionsService: any;
  // directionsRenderer: any;
  // map: google.maps.Map;
  // marker: google.maps.Marker;
  // lat = 0;
  // lng = 0;
  // // description: string;
  // // location: string;
  // image: any;
  

  // constructor(private http: HttpService, private geo: UserLocationService) {}

  // ngOnInit() {
  //   this.currLat = this.geo.currLat;
  //   this.currLng = this.geo.currLng;
  // }

  // submitReport() {
  //   this.http.getAddress(this.geo.currLat, this.geo.currLng);
  //   this.geo.getLocation();
  //   var mapProp = {
  //     zoom: 8,
  //     center: new google.maps.LatLng(29.95, -90.05)
  //   };
  //   // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  //   this.lat = this.geo.currLat;
  //   this.lng = this.geo.currLng;
  //   console.log("CLICK CLICK BOOM", this.lat);
  //   console.log("CLICK CLICK BOOM GEo", this.geo.currLat);

  //   // this.geo.getLocation();
  //   // console.log(this.geo.currLat);
  //   // this.latLng = {lat: this.geo.currLat, lng: this.geo.currLng};

  //   this.marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
  //     map: new google.maps.Map(this.gmapElement.nativeElement, {
  //       zoom: 14,
  //       center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng)
  //     }),
  //     title: "Save us... bitch!"
  //   });
  // }

  // createReport() {
  //   this.http.submitReport(this.report).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
