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
  origin = new google.maps.LatLng(29.9855777, -90.08403059999999);
  destination = new google.maps.LatLng(29.951065, -90.071533);;
  map: google.maps.Map;

  constructor(private http: HttpService, private geo: UserLocationComponent) {
    this.geo.getLocation();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  ngOnInit() {
    var mapProp = {
      zoom: 14,
      center: this.origin
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionsRenderer.setMap(this.map);
  }
  
  calcRoute() {
    var request = {
      origin: this.origin,
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