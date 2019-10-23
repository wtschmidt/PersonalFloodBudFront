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
  response: any;

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
      { maximumAge: 0, timeout: 10000, enableHighAccuracy: true });
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
}
