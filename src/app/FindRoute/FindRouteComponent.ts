import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './FindRoute.html'
})
export class FindRoute implements OnInit {

  brews: Object;

    constructor(private http: HttpService) {}
    
    ngOnInit() {
      this.http.getRoute().subscribe(data => {
        this.brews = data;
        console.log(this.brews);
      })
    }
}