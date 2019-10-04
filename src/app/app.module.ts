import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindRoute } from './FindRoute/FindRouteComponent';
import { CreateReport } from './CreateReport/CreateReportComponent';
import { ConnectContacts } from './ConnectToContacts/ConnectToContacts';
import { AutoCompleteSearchComponent } from './auto-complete-search/auto-complete-search.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserLocationComponent } from './user-location/user-location.component';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule
} from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";
import { DialogService } from "./services/dialog.service";
import { AppHeaderComponent } from './app-header/app-header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    ConnectContacts,
    UserLocationComponent,
    AutoCompleteSearchComponent,
    DialogComponent,
    AppHeaderComponent,
    UserProfileComponent
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
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
  // entryComponents: [CourseDialogComponent]
})
export class AppModule {}
