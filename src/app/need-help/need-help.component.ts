import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";
import { Router } from "@angular/router"
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

  constructor(private http: HttpService, private geo: UserLocationService, private router: Router) { }

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
    this.userId = localStorage.getItem('userId');
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;
  }
}
