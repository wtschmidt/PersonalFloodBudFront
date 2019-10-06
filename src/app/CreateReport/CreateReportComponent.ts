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
    var mapProp = {
      zoom: 12,
      center: new google.maps.LatLng(29.95, -90.05),
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;

    // this.geo.getLocation();
    // console.log(this.geo.currLat);
    // this.latLng = {lat: this.geo.currLat, lng: this.geo.currLng};

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      map: new google.maps.Map(this.gmapElement.nativeElement, {
        zoom: 18,
        center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      }),
      label: "A",
      title: 'Save us... bitch!'
    });
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
