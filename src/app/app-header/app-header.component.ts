import { Component, OnInit } from "@angular/core";
import { DialogService } from "../services/dialog.service";
import { DialogData } from "../shared/dialog-data";
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"]
})
export class AppHeaderComponent implements OnInit {
  googleLogoutUrl = `/logout`;
  googleLoginUrl = `/auth/google`;
  rainfall;
  userId;

  constructor(
    private http: HttpService,
    private dialogService: DialogService,
    private activatedRoute: ActivatedRoute,
    public route: Router
  ) {}

  openDialog() {
    const dialogData: DialogData = {
      title: "Today's Rainfall",
      message: `It's rained <span class="mat-body-2"> ${this.http.rainfall} inches </span>in the last 3 hours in the New Orleans area.`,
      showOKBtn: false,
      showCancelBtn: false
    };

    const dialogRef = this.dialogService.openDialog(dialogData, {
      disableClose: false
    });
  }

  logout() {
    localStorage.setItem("userId", "null");
    this.userId = "null";
  }

  ngOnInit() {
    this.http.getRainfall().subscribe(result => {
      this.rainfall = result;
    });

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      if (queryParams.get("id") !== null) {
        localStorage.setItem("userId", queryParams.get("id"));
        this.userId = localStorage.getItem("userId");
      } else if (localStorage.getItem("userId") !== "null") {
        this.userId = localStorage.getItem("userId");
      } else {
        this.userId = "null";
      }
    });
  }
}
