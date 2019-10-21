import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http.service';
// import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe

@Injectable({
  providedIn: 'root'
})
export class UserLocationService implements OnInit{

  constructor(private http: HttpService) { }

  currLat: number;
  currLng: number;
  geoBtn = document.querySelector('.enable');
  revokeBtn = document.querySelector('.revoke');
  nudge = document.getElementById("nudge");
  response: any;

  ngOnInit() {
    this.getLocation();
    // this.handlePermission();
  }

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const pos = {
          lat : position.coords.latitude,
          lng : position.coords.longitude
        }
        this.currLat = pos.lat;
        this.currLng = pos.lng;
      },
      (error) => {
        // console.log(error);
        this.http.getGeoLocation().subscribe((response) => {
          this.response = response;
          var responselocation = this.response.loc.split(',');
          var pos = {
            lat: responselocation[0],
            lng: responselocation[1]
          };
          this.currLat = Number(pos.lat);
          this.currLng = Number(pos.lng);
        })
      }, 
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
}
