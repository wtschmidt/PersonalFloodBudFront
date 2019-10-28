import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Observable, of } from 'rxjs';
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
    await this.http.getReports().subscribe(data => {
      for (var key in data) {
        if (data[key].user_id === this.user.id) {
          this.userReports.unshift(data[key])
        } else {
          this.reports.unshift(data[key]);
        }
      }
    });
  }

  deleteReport(event, report) {
    console.log(report);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        for (let i = this.userReports.length - 1; i >= 0; i--) {
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
