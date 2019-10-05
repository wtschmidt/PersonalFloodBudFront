import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { ConnectContacts } from "./ConnectToContacts/ConnectToContacts";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

const routes: Routes = [
  { path: "route", component: FindRoute },
  { path: "create-report", component: CreateReport },
  { path: "connect-contacts", component: ConnectContacts },
  { path: "user-profile", component: UserProfileComponent },
  { path: "user-reports", component: UserReportsComponent },
  { path: "user-settings", component: UserSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
