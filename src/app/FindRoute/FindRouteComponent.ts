import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { UserLocationComponent } from '../user-location/user-location.component';

@Component({
  selector: 'app-root',
  templateUrl: './FindRoute.html'
})
export class FindRoute implements OnInit {

  brews: Object;

    constructor(private http: HttpService, private geo: UserLocationComponent) {}
    
    ngOnInit() {
      this.geo.getLocation();
      this.http.getRoute().subscribe(data => {
        console.log(data);
        this.brews = data;
      })
    }
}