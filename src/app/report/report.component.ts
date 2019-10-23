import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})
export class ReportComponent implements OnInit {

  reports = [];
  userReports = [];
  googleId;
  user;

  constructor(private http: HttpService, private router: Router) {}

  async ngOnInit() {
    this.googleId = localStorage.getItem("userId");
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
    for (let i = 0; i < this.userReports.length; i++) {
      if (this.userReports[i].id === report.id) {
        this.userReports.splice(i, 1);
      }
    };
    this.http.deleteReport(report.id).subscribe((response) => {
      console.log(response);
      if (response === "DELETED") {
        Swal.fire("Report Deleted!", "success");
        this.router.navigate([""]);
      } else {
        Swal.fire("Something went wrong...");
      }
    })
  }
}
