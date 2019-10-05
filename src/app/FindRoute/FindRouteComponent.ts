import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { } from 'googlemaps';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { AutoCompleteSearchComponent } from '../auto-complete-search/auto-complete-search.component';
import { UserLocationService } from '../services/user-location.service';

@Component({
  selector: 'find-route',
  templateUrl: './FindRoute.html'
})
export class FindRoute implements OnInit {
  @ViewChild('gmap', {static: true}) gmapElement: any;
  @ViewChild(AutoCompleteSearchComponent, {static: true}) AutoCompleteSearch;
  directionsService: any;
  directionsRenderer: any;
  map: google.maps.Map;

  constructor(private http: HttpService, private geo: UserLocationService) {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  ngOnInit() {
    var mapProp = {
      zoom: 15,
      center: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionsRenderer.setMap(this.map);
  }
  
  calcRoute() {
    var request = {
      origin: new google.maps.LatLng(this.geo.currLat, this.geo.currLng),
      destination: new google.maps.LatLng(this.AutoCompleteSearch.destLat, this.AutoCompleteSearch.destLng),
      travelMode: google.maps.TravelMode['DRIVING'],
      provideRouteAlternatives: true
    };

    let myDirectionsRenderer = this.directionsRenderer;
    this.directionsService.route(request, function (response) {
      if (response.status == 'OK') {
        myDirectionsRenderer.setDirections(response);
      }
    });
  }
}