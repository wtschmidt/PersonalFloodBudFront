import { Component, OnInit } from "@angular/core";
import { DialogService } from "../services/dialog.service";
import { DialogData } from "../shared/dialog-data";
import { HttpService } from '../http.service';

@Component({
  selector: "app-app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent implements OnInit {

  rainfall: object;

  constructor(private http: HttpService, private dialogService: DialogService) {}

  openDialog() {
    this.http.getRainfall().subscribe(data => {
      console.log(data);
      this.rainfall = data;
    });

    const dialogData: DialogData = {
      title: "Current Rainfall Level",
      message: `It's rained ${this.rainfall} inches so far today.`,
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
  }
}
