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
}
