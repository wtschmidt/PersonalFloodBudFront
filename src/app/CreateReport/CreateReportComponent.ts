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

  @ViewChild('gmap', {static: true}) gmapElement: any;
  // @ViewChild(UserLocationComponent, {static: true}) geo;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  marker2: google.maps.Marker;
  markers = [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}, {lat: 29.9770, lng: -90.0797773}, {lat: 29.9699, lng: -90.08}]
  lat = 0;
  lng = 0;
  latLng = {};
  description: string;
  location: string;

  constructor(private http: HttpService, private geo: UserLocationService) {
  }

  ngOnInit () {
    this.geo.getLocation();
    // var mapProp = {
    //   zoom: 12,
    //   center: new google.maps.LatLng(29.95, -90.05),
    // }
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;

  // ngOnInit() {
  //   this.markLat = this.geo.currLat;
  //   this.markLng = this.geo.currLng;
  // }

    // this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   map: new google.maps.Map(this.gmapElement.nativeElement, {
    //     zoom: 18,
    //     center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   }),
    //   label: "A",
    //   title: 'Save us... bitch!'
    // });
    // this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(29.9777, -90.0797473),
    //   map: new google.maps.Map(this.gmapElement.nativeElement, {
    //     zoom: 18,
    //     center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   }),
    //   label: "B",
    //   title: 'Lesser Bitch!'
    // });
    // this.markers.forEach(mark => {
    //   this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(mark.lat, mark.lng),
    //   map: new google.maps.Map(this.gmapElement.nativeElement, {
    //     zoom: 18,
    //     center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    //   }),
    //   label: "B",
    //   title: 'lesser bitches!'
    // });
    // })
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
  // report = {
  //   latLng: this.geo.currLat + "," + this.geo.currLng,
  //   location: '',
  //   desc: '',
  //   img: this.image,
  // }

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
