import { Component, OnInit } from "@angular/core";
import { ContactNeedHelpComponent } from "../contact-need-help/contact-need-help.component";
import { ContactSafeMovingComponent } from "../contact-safe-moving/contact-safe-moving.component";
import { ContactStrandedOkayComponent } from "../contact-stranded-okay/contact-stranded-okay.component";

@Component({
  selector: "app-connect-to-contacts",
  templateUrl: "./connect-to-contacts.component.html",
  styleUrls: ["./connect-to-contacts.component.scss"]
})
export class ConnectToContactsComponent implements OnInit {
  userId;
  constructor() {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
  }
}
