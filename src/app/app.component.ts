import { Component, OnInit } from "@angular/core";
import { UserLocationService } from './services/user-location.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  title = "flood";

  constructor(private geo: UserLocationService) {}

  ngOnInit() {
    this.geo.getLocation();
  }
}
