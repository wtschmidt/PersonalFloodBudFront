import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

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

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";

import { DialogComponent } from "./dialog/dialog.component";
import { DialogService } from "./services/dialog.service";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { UserLocationService } from "./services/user-location.service";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AutoSearchComponent } from './auto-search/auto-search.component';
import { ConnectToContactsComponent } from './connect-to-contacts/connect-to-contacts.component';
import { ContactSafeMovingComponent } from './contact-safe-moving/contact-safe-moving.component';
import { ContactStrandedOkayComponent } from './contact-stranded-okay/contact-stranded-okay.component';
import { ContactNeedHelpComponent } from './contact-need-help/contact-need-help.component';
import { SafeMovingComponent } from './safe-moving/safe-moving.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { StrandedOkayComponent } from './stranded-okay/stranded-okay.component';

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
    StrandedOkayComponent
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDparA5bqjrMG9t3hRPFFOzX-bbJ-cRwJ8',
      libraries: ["places"]
    }),
    AgmDirectionModule,
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
