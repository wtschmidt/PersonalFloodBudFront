import { Component, OnInit } from "@angular/core";
import { DialogService } from "../services/dialog.service";
import { DialogData } from "../shared/dialog-data";
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    public route: Router,
    ) { }

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

  logout() {
    localStorage.setItem('userId', null);
    this.userId = null;
  }
  
  ngOnInit() {
    this.http.getRainfall().subscribe(result => {
      console.log("rain", result);
    });
    
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      if (queryParams.get('id') !== null) {
        localStorage.setItem('userId', queryParams.get("id"));
        this.userId = localStorage.getItem('userId');
      }
    })
  }
}
