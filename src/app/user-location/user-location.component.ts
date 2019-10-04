import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {

  constructor() { }

  currLocation: any;
  currLat: number;
  currLng: number;

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat : position.coords.latitude,
          lng : position.coords.longitude
        }
        this.currLat = pos.lat;
        this.currLng = pos.lng;
        this.currLocation = pos.lat + " " + pos.lng;
      });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
    
  }

  ngOnInit() {
    this.getLocation();
  }

}
