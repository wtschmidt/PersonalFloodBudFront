import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from '@angular/material/tabs';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatStepperModule,
  MatExpansionModule,
} from "@angular/material";

import { DialogComponent } from "./dialog/dialog.component";
import { DialogService } from "./services/dialog.service";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { UserLocationService } from "./services/user-location.service";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AutoSearchComponent } from "./auto-search/auto-search.component";
import { ConnectToContactsComponent } from "./connect-to-contacts/connect-to-contacts.component";
import { ContactSafeMovingComponent } from "./contact-safe-moving/contact-safe-moving.component";
import { ContactStrandedOkayComponent } from "./contact-stranded-okay/contact-stranded-okay.component";
import { ContactNeedHelpComponent } from "./contact-need-help/contact-need-help.component";
import { SafeMovingComponent } from "./safe-moving/safe-moving.component";
import { NeedHelpComponent } from "./need-help/need-help.component";
import { StrandedOkayComponent } from "./stranded-okay/stranded-okay.component";
import { HomeComponent } from "./home/home.component";
import { ReportComponent } from "./report/report.component";
import { AddContactsComponent } from "./add-contacts/add-contacts.component";

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    DialogComponent,
    AppHeaderComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserReportsComponent,
    AppFooterComponent,
    AutoSearchComponent,
    ConnectToContactsComponent,
    ContactSafeMovingComponent,
    ContactStrandedOkayComponent,
    ContactNeedHelpComponent,
    SafeMovingComponent,
    NeedHelpComponent,
    StrandedOkayComponent,
    HomeComponent,
    ReportComponent,
    AddContactsComponent
    // CourseDialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDparA5bqjrMG9t3hRPFFOzX-bbJ-cRwJ8",
      libraries: ["places"]
    }),
    AgmDirectionModule,
    AgmJsMarkerClustererModule,
    MatDividerModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [DialogService, UserLocationService],
  bootstrap: [AppComponent]
  // entryComponents: [CourseDialogComponent]
})
export class AppModule {}
