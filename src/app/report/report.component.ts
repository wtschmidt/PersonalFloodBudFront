import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})
export class ReportComponent implements OnInit {

  reports = [];
  userReports = [];
  googleId = localStorage.getItem("userId");
  user;

  constructor(private http: HttpService) {}

  async ngOnInit() {
    await this.http.getUserInfo(this.googleId).subscribe(data => {
      this.user = data
    })
    this.http.getReports().subscribe(data => {
      for (var key in data) {
        if (data[key].user_id === this.user.id) {
          this.userReports.push(data[key])
        } else {
          this.reports.push(data[key]);
        }
      }
    });
  }

  deleteReport(event, report) {
    console.log(report);
    this.http.deleteReport(report.id).subscribe((response) => {
      console.log(response);
    })
  }
}
