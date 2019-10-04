import { Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from '../http.service';
import { UserLocationComponent } from '../user-location/user-location.component';
import { } from 'googlemaps';


@Component({
  selector: 'create-report',
  templateUrl: './CreateReport.html'
})
export class CreateReport implements OnInit {

  @ViewChild('gmap', {static: true}) gmapElement: any;
  @ViewChild(UserLocationComponent, {static: true}) geo;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  lat = 0;
  lng = 0;
  latLng = {};

  constructor(private http: HttpService) {
  }

  ngOnInit () {
    var mapProp = {
      zoom: 12,
      center: new google.maps.LatLng(29.95, -90.05),
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  convertCoords() {
    // function that converts our lat/long into an address

  }

  submitReport () {
    console.log("CLICK CLICK BOOM", this.lat);
    console.log("CLICK CLICK BOOM GEo", this.geo.currLat);

    // this.geo.getLocation();
    // console.log(this.geo.currLat);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
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
}
