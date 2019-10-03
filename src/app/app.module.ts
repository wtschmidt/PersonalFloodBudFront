import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindRoute } from './FindRoute/FindRouteComponent';
import { CreateReport } from './CreateReport/CreateReportComponent';
import { ConnectContacts } from './ConnectToContacts/ConnectToContacts';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UserLocationComponent } from './user-location/user-location.component';

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    ConnectContacts,
    UserLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [UserLocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
