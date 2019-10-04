import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { } from 'googlemaps';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { UserLocationComponent } from '../user-location/user-location.component';

@Component({
  selector: 'find-route',
  templateUrl: './FindRoute.html'
})
export class FindRoute implements OnInit {
  @ViewChild('gmap', {static: true}) gmapElement: any;
  directionsService: any;
  directionsRenderer: any;
  lat: number = this.geo.currLat;
  lng: number = this.geo.currLng;
  // getGeoLocation;
  // origin = new google.maps.LatLng(this.lat, this.lng);
  destination = new google.maps.LatLng(29.951065, -90.071533);;
  map: google.maps.Map;

  constructor(private http: HttpService, private geo: UserLocationComponent) {
    // this.getGeoLocation = this.geo.getLocation();
    console.log('lat: ' + this.lat + " lng: " + this.lng)
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  ngOnInit() {
    this.geo.getLocation();
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    console.log('lat: ' + this.lat + " lng: " + this.lng)
    var mapProp = {
      zoom: 14,
      center: new google.maps.LatLng(29.95, -90.07),
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionsRenderer.setMap(this.map);
  }
  
  calcRoute() {
    console.log(this.lat + " " + this.geo.currLat);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    var request = {
      origin: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      destination: this.destination,
      travelMode: google.maps.TravelMode['DRIVING']
    };

    let myDirectionsRenderer = this.directionsRenderer
    this.directionsService.route(request, function (response) {
      if (response.status == 'OK') {
        myDirectionsRenderer.setDirections(response);
      }
    });
  }
}