import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindRoute } from './FindRoute/FindRouteComponent';
import { CreateReport } from './CreateReport/CreateReportComponent';
import { ConnectContacts } from './ConnectToContacts/ConnectToContacts';

const routes: Routes = [
  { path: 'route', component: FindRoute },
  { path: 'create-report', component: CreateReport },
  { path: 'connect-contacts', component: ConnectContacts },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
