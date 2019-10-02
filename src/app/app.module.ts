import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { ConnectContacts } from "./ConnectToContacts/ConnectToContacts";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    ConnectContacts,
    DialogComponent
    // CourseDialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
  // entryComponents: [CourseDialogComponent]
})
export class AppModule {}
