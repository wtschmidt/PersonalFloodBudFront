import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";

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
  }

  handleInput(event) {
    this.message = event.target.value;
  }

  ngOnInit() {}
}
