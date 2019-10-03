import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {

  constructor() { }

  currLocation: any;

  getLocation(){
    // const latLng = lat.toString() + lng.toString();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat : position.coords.latitude,
          lng : position.coords.longitude
        }
        console.log(pos.lat);
        console.log(pos.lng);
        this.currLocation = pos.lat + " " + pos.lng;
      });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
    
  }

  ngOnInit() {
    this.getLocation();
    console.log(this.currLocation);
  }

}
