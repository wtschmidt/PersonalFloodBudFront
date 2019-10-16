import { Component, OnInit } from "@angular/core";
import { HttpService } from './http.service';
import { UserLocationService } from './services/user-location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "flood";

  constructor(
    private http: HttpService,
    private geo: UserLocationService,
    private activatedRoute: ActivatedRoute,
    public route: Router
    ) {
      console.log('ROUTE', this.activatedRoute.snapshot.queryParams);
    }

  ngOnInit() {
    // this.geo.handlePermission();
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
