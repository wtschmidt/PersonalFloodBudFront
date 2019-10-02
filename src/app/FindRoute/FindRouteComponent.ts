import { Component, ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './FindRoute.html'
})
export class FindRoute {
  @ViewChild('gmap', {static: true}) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(29.951065, -90.071533),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}