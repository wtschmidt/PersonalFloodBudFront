import { Component } from "@angular/core";
import { DialogService } from "./services/dialog.service";
import { DialogData } from "./shared/dialog-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "flood";

  constructor(private dialogService: DialogService) {}

  openDialog() {
    const dialogData: DialogData = {
      title: "Test Dialog",
      message: "This is our first dialog!",
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
}
