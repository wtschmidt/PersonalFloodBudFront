import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService implements OnInit{

  constructor() { }

  currLocation: any;
  currLat: number;
  currLng: number;

  ngOnInit() {
    this.getLocation();
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
      alert("Geolocation is not supported by this browser.");
    }
  }
}
