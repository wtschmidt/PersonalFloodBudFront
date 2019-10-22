import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe

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
    // this.handlePermission();
  }

  // public getLocation(): Observable<Position> {
  //   return new Observable((observer) => {
  //     // Get the next and error callbacks. These will be passed in when
  //     // the consumer subscribes.
  //     let watchId;
  //     // next callback
  //     const onSuccess: PositionCallback = function(pos: Position) {
  //       observer.next(pos);
  //     };
  //     // error callback
  //     const onError: PositionErrorCallback | any = function(error) {
  //       observer.error(error);
  //     };
    
  //     // Simple geolocation API check provides values to publish
  //     if (navigator.geolocation) {
  //       watchId = navigator.geolocation.getCurrentPosition(onSuccess, onError,
  //         {
  //           enableHighAccuracy: false,
  //           timeout: 15000,
  //           maximumAge: 0
  //         }
  //         );
  //     } else {
  //       onError('Geolocation not available');
  //     }
  //     // When the consumer unsubscribes, clean up data ready for next subscription.
  //     return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
  //   })
  // }

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
      { maximumAge: 0, timeout: 10000, enableHighAccuracy: true });
    } else { 
      // this.handlePermission();
      alert("Geolocation is not supported by this browser.");
    }
  }

  // handlePermission() {
  //   navigator.permissions.query({name:'geolocation'}).then(function(result) {
  //     if (result.state == 'granted') {
  //       this.report(result.state);
  //       this.geoBtn.style.display = 'none';
  //       this.getLocation();
  //     } else if (result.state == 'prompt') {
  //       this.report(result.state);
  //       this.geoBtn.style.display = 'none';
  //       // navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
  //       this.getLocation();
  //     } else if (result.state == 'denied') {
  //       this.report(result.state);
  //       this.geoBtn.style.display = 'inline';
  //     }
  //     result.onchange = function() {
  //       console.log('Permission ' + result.state);
  //     }
  //   });
  // }
  
  // report(state) {
  //   console.log('Permission ' + state);
  // }
}
