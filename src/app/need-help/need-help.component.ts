import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { UserLocationService } from "../services/user-location.service";

@Component({
  selector: "app-need-help",
  templateUrl: "./need-help.component.html",
  styleUrls: ["./need-help.component.scss"]
})
export class NeedHelpComponent implements OnInit {
  message: string = `Enter an optional message here to contact your friends.`;

  constructor(private http: HttpService, private geo: UserLocationService) {}

  handleInput(event) {
    this.message = event.target.value;
  }

  ngOnInit() {}
}
