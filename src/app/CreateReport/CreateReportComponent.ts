import { Component, ViewChild, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material";
import { HttpService } from '../http.service';
import { UserLocationComponent } from '../user-location/user-location.component';


@Component({
  selector: "app-root",
  templateUrl: "./CreateReport.html"
})
export class CreateReport implements OnInit {

  @ViewChild('gmap', {static: true}) gmapElement: any;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  lat = 0;
  lng = 0;
  latLng = {};

  constructor(private geo: UserLocationComponent, private http: HttpService) {
  }

  ngOnInit () {
    this.geo.getLocation();
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    this.latLng = {lat: this.lat, lng: this.lng};

    var mapProp = {
      zoom: 14,
      center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      map: this.map,
      title: 'Save us... bitch!'
    });
  }

  submitReport () {
    console.log("CLICK CLICK BOOM", this.lat);
    console.log("CLICK CLICK BOOM GEo", this.geo.currLat);

  }
}
