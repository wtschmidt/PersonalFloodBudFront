import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  reports;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getReports().subscribe(data => {
      this.reports = data;
      console.log(this.reports);
    });
  }
}
