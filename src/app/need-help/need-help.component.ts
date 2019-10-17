import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-need-help",
  templateUrl: "./need-help.component.html",
  styleUrls: ["./need-help.component.scss"]
})
export class NeedHelpComponent implements OnInit {
  lat;
  lng;
  message: string = `I'm stranded and I need help! I'm staying put and sending you my location.`;
  userId;

  constructor(private http: HttpService, private geo: UserLocationService) { }

  sendMessage() {
    // check if user is logged in
    if (this.userId === 'null') {
      Swal.fire('Please log in');
    } else {
      console.log(this.message);
      this.http
        .submitMessage({
          id: this.userId,
          message: this.message,
          lat: this.lat,
          lng: this.lng
        })
        .subscribe(data => {
          console.log(data);
        });
    }
  }

  handleInput(event) {
    this.message = event.target.value;
  }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
    console.log("init location", this.lat, this.lng);
  }
}
