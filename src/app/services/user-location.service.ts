import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService implements OnInit{

  constructor() { }

  currLocation: any;
  currLat: number;
  currLng: number;
  storedLat = Number(localStorage.getItem("currLat"));
  storedLng = Number(localStorage.getItem("currLng"));

  async ngOnInit() {
    await this.getLocation();
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
        localStorage.setItem("currLat", this.currLat.toString());
        localStorage.setItem("currLng", this.currLng.toString());
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
