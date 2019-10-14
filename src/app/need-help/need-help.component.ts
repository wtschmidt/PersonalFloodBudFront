import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";

@Component({
  selector: "app-need-help",
  templateUrl: "./need-help.component.html",
  styleUrls: ["./need-help.component.scss"]
})
export class NeedHelpComponent implements OnInit {
  constructor(private http: HttpService, private geo: UserLocationService) {}

  ngOnInit() {}
}
