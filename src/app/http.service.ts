import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAddress(lat, lng) {
    let latLng = lat + "," + lng
    let params = new HttpParams().set('location', latLng);
    return this.http.get(`/convert-address`, {
      params: params
    })
  }

  getRoute(){
    return this.http.get('/route');
  }
}
