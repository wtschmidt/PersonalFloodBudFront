import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe

@Injectable({
  providedIn: 'root'
})
export class UserLocationService implements OnInit{

  constructor() { }

  currLocation: any;
  currLat: number;
  currLng: number;
  geoBtn = document.querySelector('.enable');
  revokeBtn = document.querySelector('.revoke');
  nudge = document.getElementById("nudge");

  ngOnInit() {
    () => {
      this.nudge.style.display = "block";
    };
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
        this.currLocation = pos.lat + " " + pos.lng;
      },
      (error) => {
        console.log(error);
      }, 
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
    } else { 
      this.handlePermission();
      alert("Geolocation is not supported by this browser.");
    }
  }

  handlePermission() {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state == 'granted') {
        this.report(result.state);
        this.geoBtn.style.display = 'none';
        this.getLocation();
      } else if (result.state == 'prompt') {
        this.report(result.state);
        this.geoBtn.style.display = 'none';
        // navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
        this.getLocation();
      } else if (result.state == 'denied') {
        this.report(result.state);
        this.geoBtn.style.display = 'inline';
      }
      result.onchange = function() {
        console.log('Permission ' + result.state);
      }
    });
  }
  
  report(state) {
    console.log('Permission ' + state);
  }
}
