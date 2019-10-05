import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  rainfall: object;
  

  submitReport(report) {
    // let latLng = lat + "," + lng
    console.log(report);
    // let params = new HttpParams().set('location', report);
    return this.http.post('/submitReport', {report});
  }

  getRoute(){
    return this.http.get('/route');
  }

  getRainfall(){
    return this.http.get('/rainfall');
  }

  
}
