import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRoute(){
    // return this.http.get('https://api.openbrewerydb.org/breweries');
    return this.http.get('/route');
  }

  currentPosition(position) {
    const pos = {
      lat : position.coords.latitude,
      lng : position.coords.longitude
    }
    // let latLng = pos.lat + pos.lng;
    // string version if we need it

    return pos;
  }

  getLocation(){
    // const latLng = lat.toString() + lng.toString();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.currentPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
    
  }
}
