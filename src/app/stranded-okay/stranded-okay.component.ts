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
  message = {};

  constructor(private http: HttpService, private geo: UserLocationService) {}

  sendMessage() {}

  ngOnInit() {}
}
