import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { HttpService } from "../http.service";
import { Observable } from "rxjs";
import { UserLocationService } from "../services/user-location.service";
import { AutoSearchComponent } from '../auto-search/auto-search.component';

@Component({
  selector: "find-route",
  styles: ['agm-map { height: 400px;}'],
  templateUrl: "./FindRoute.html"
})
export class FindRoute implements OnInit {

  @ViewChild(AutoSearchComponent, { static: true }) autoSearch;
  lat;
  lng;
  origin: any;
  destination: any;

  constructor(private http: HttpService, private geo: UserLocationService) {

  }

  ngOnInit() {
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
  }

  getDirection() {
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = { lat: this.autoSearch.lat, lng: this.autoSearch.lng };
  }
}
