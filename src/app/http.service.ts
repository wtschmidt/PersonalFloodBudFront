import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAddress(lat, lng) {
    
  }

  getRoute(){
    return this.http.get('/route');
  }
}
