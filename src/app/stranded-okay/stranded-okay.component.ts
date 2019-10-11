import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-stranded-okay",
  templateUrl: "./stranded-okay.component.html",
  styleUrls: ["./stranded-okay.component.css"]
})
export class StrandedOkayComponent implements OnInit {
  lat;
  lng;
  message: string = `I've been caught in a flood, but I'm ok. I'm staying put and sending you my location.`;

  constructor(private http: HttpService, private geo: UserLocationService) {}

  sendMessage() {
    console.log(this.message);
    this.http
      .submitMessage({
        user: 1,
        message: this.message,
        lat: this.lat,
        lng: this.lng
      })
      .subscribe(data => {
        console.log(data);
      });
  }

  handleInput(event) {
    this.message = event.target.value;
  }

  ngOnInit() {
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    console.log("init location", this.lat, this.lng);
  }
}
