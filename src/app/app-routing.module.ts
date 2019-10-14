import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { ConnectToContactsComponent } from "./connect-to-contacts/connect-to-contacts.component";
import { ContactNeedHelpComponent } from "./contact-need-help/contact-need-help.component";
import { ContactSafeMovingComponent } from "./contact-safe-moving/contact-safe-moving.component";
import { ContactStrandedOkayComponent } from "./contact-stranded-okay/contact-stranded-okay.component";
import { SafeMovingComponent } from "./safe-moving/safe-moving.component";
import { StrandedOkayComponent } from "./stranded-okay/stranded-okay.component";
import { NeedHelpComponent } from "./need-help/need-help.component";
import { HomeComponent } from "./home/home.component";
import { AddContactsComponent } from "./add-contacts/add-contacts.component";

const routes: Routes = [
  { path: "route", component: FindRoute },
  { path: "create-report", component: CreateReport },
  { path: "connect-contacts", component: ConnectToContactsComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "user-reports", component: UserReportsComponent },
  { path: "user-settings", component: UserSettingsComponent },
  { path: "contact-need-help", component: ContactNeedHelpComponent },
  { path: "contact-safe-moving", component: ContactSafeMovingComponent },
  { path: "contact-stranded-okay", component: ContactStrandedOkayComponent },
  { path: "safe-moving", component: SafeMovingComponent },
  { path: "stranded-okay", component: StrandedOkayComponent },
  { path: "need-help", component: NeedHelpComponent },
  { path: "", component: HomeComponent },
  { path: "add-contacts", component: AddContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
