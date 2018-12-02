import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevExtremeModule,
  DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTicketFromComponent } from './new-ticket-from/new-ticket-from.component';
import { HomeComponent } from './home/home.component';
import { EditTicketFormComponent } from './edit-ticket-form/edit-ticket-form.component';
import { CurrentTicketsComponent } from './current-tickets/current-tickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTicketFromComponent,
    HomeComponent,
    EditTicketFormComponent,
    CurrentTicketsComponent,
    DashboardComponent,
    ContactComponent,
    AdminComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxSelectBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,
		DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
