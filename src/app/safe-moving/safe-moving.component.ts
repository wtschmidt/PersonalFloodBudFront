import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";

@Component({
  selector: "app-safe-moving",
  templateUrl: "./safe-moving.component.html",
  styleUrls: ["./safe-moving.component.css"]
})
export class SafeMovingComponent implements OnInit {
  constructor(private http: HttpService, private geo: UserLocationService) {}

  ngOnInit() {}
}
