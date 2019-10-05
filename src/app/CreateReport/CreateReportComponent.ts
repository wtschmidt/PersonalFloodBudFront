import { Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from '../http.service';
import { } from 'googlemaps';
import { UserLocationService } from '../services/user-location.service';


@Component({
  selector: 'create-report',
  templateUrl: './CreateReport.html'
})
export class CreateReport implements OnInit {

  @ViewChild('gmap', {static: true}) gmapElement: any;
  // @ViewChild(UserLocationComponent, {static: true}) geo;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  lat = 0;
  lng = 0;
  latLng = {};
  description: string;
  location: string;

  constructor(private http: HttpService, private geo: UserLocationService) {
  }

  ngOnInit () {
    this.geo.getLocation();
    var mapProp = {
      zoom: 12,
      center: new google.maps.LatLng(29.95, -90.05),
    }
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
        zoom: 18,
        center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      }),
      title: 'Save us... bitch!'
    });
  }

  submitReport() {
    // function that converts our lat/long into an address
    // console.log(this.description);
    console.log(this.lat);
    this.http.getAddress(this.geo.currLat, this.geo.currLng);
  }

  getCurrentLocation () {
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
