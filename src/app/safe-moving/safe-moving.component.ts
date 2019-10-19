import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-safe-moving",
  templateUrl: "./safe-moving.component.html",
  styleUrls: ["./safe-moving.component.scss"]
})
export class SafeMovingComponent implements OnInit {
  lat;
  lng;
  message: string = `I’ve been caught in a flood, but I’m OK. I’m headed to higher ground and my most recent location is attached.`;
  userId;

  constructor(private http: HttpService, private geo: UserLocationService, private router: Router) {}

  sendMessage() {
    // check if user is logged in
    if (this.userId === 'null') {
      Swal.fire('Please log in');
    } else if (!this.lat || !this.lng) {
      Swal.fire(
        "Oops...",
        "We can't find your location",
        "error"
      );
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

      Swal.fire(
        "Success!",
        "Your message has been sent",
        "success"
      );
      this.router.navigate(["/connect-contacts"]);
    }
  }

  handleInput(event) {
    this.message = event.target.value;
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
  }
}
