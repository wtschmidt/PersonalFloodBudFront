import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-root',
  templateUrl: './FindRoute.html'
})
export class FindRoute implements OnInit {
    constructor(private http: HttpService) {}
    
    ngOnInit() {
      this.http.myMethod()
    }
}