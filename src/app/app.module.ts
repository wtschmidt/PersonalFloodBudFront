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

@NgModule({
  declarations: [
    AppComponent,
    FindRoute,
    CreateReport,
    ConnectContacts,
    AutoCompleteSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
