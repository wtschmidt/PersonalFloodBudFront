import { Component, OnInit } from "@angular/core";
import { DialogService } from "../services/dialog.service";
import { DialogData } from "../shared/dialog-data";
import { HttpService } from "../http.service";

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"]
})
export class AppHeaderComponent implements OnInit {
  googleLogoutUrl = `/logout`;
  googleLoginUrl = `/auth/google`;
  currentUser = localStorage.getItem("userId");
  rainfall;

  constructor(
    private http: HttpService,
    private dialogService: DialogService
  ) {}

  openDialog() {
    const dialogData: DialogData = {
      title: "Current Rainfall Level",
      message: `It's rained ${this.http.rainfall} inches so far today.`,
      showOKBtn: true,
      showCancelBtn: true
    };

    const dialogRef = this.dialogService.openDialog(dialogData, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("User clicked OK");
      } else {
        console.log("User clicked Cancel");
      }
    });
  }
  ngOnInit() {
    this.http.getRainfall().subscribe(result => {
      console.log("rain", result);
    });
  }
}
