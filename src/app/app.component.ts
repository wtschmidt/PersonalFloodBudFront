import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { UserLocationService } from "./services/user-location.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "flood";

  constructor(private http: HttpService, private geo: UserLocationService) {}

  ngOnInit() {
    this.geo.getLocation();

    this.http.getReports().subscribe(data => {
      this.http.dbReports = data;
    });

    this.http.getRainfall().subscribe(data => {
      console.log(data + " is the rainfall so far today");
      this.http.rainfall = data;
    });
  }
}
