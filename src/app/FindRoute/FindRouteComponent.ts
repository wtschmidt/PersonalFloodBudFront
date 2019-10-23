import { Component, ViewChild, OnInit, ElementRef, EventEmitter, Output } from "@angular/core";
import { HttpService } from "../http.service";
import { Observable } from "rxjs";
import { UserLocationService } from "../services/user-location.service";
import { AutoSearchComponent } from "../auto-search/auto-search.component";
// ngrok authtoken 1SIx28kDwos7LjPYUkYbBey30F8_Xzp1v88TLqAqsXinU8QJ
// ^^^^^ token for accessing my ngrok profile after install
// host secure tunnels with –––––> ngrok http 8080 <–––––––
// be sure to choose the https hosted url

@Component({
  selector: "find-route",
  styles: ["agm-map { height: 40vh;}"],
  templateUrl: "./FindRoute.html"
})
export class FindRoute implements OnInit {

  @ViewChild(AutoSearchComponent, { static: true }) autoSearch;
  // @ViewChild('AgmMap') agmMap: AgmMap;

  lat;
  lng;
  endLat;
  endLng;
  origin: any;
  destination: any;
  wayPoints: object;
  directions: any;
  reports: any;
  markers;
  mapReqInfo: object;
  otherUserMarker = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  bounds;

  // @Output()
  // eventEmitter = new EventEmitter();

  constructor(private http: HttpService, private geo: UserLocationService) {}

  ngOnInit() {
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    this.markers = this.getReportCoords();
    this.bounds  = new google.maps.LatLngBounds();
    // console.log(this.geo.currLat, "this is my lat");
    // console.log(this.lng, "this is my lng");
  }

  getDirections() {
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = { lat: this.autoSearch.lat, lng: this.autoSearch.lng };
    this.endLat = this.destination.lat;
    this.endLng = this.destination.lng;
    this.mapReqInfo = {
      origin: this.origin,
      destination: this.destination
    };

    this.http.getMap(this.mapReqInfo).subscribe(directions => {
      //use "diretions" to make API call to agm-direction,
      // to create a route with the series of waypoints returned from the http req in "directions"
      console.log(directions, "these are directions from graphHopper");
      this.directions = directions;
      this.wayPoints = this.directions.waypoints;
    });
  }

  getReportCoords() {
    let markerArray = [];
    // format the reports to create an array of objects of coords:
    // [{lat: 29.9777, lng: -90.0797473}, {lat: 29.9797, lng: -90.0777473}]
    this.http.dbReports.forEach(report => {
      // check if latlng is null. the db has some test data that has null
      if (report.latlng) {
        let reportCoords = report.latlng.split(",");
        markerArray.push({
          lat: reportCoords[0],
          lng: reportCoords[1],
          img: report.img,
          desc: report.description
        });
      }
    });
    // change this later. the first object is formatted differently from the rest so exclude for now
    return markerArray;
  }

  // updateLocation() {
  //   this.lat = this.geo.currLat;
  //   this.lng = this.geo.currLng;
  // }

  // emitter() {
  //   this.eventEmitter.emit();
  // }
}
