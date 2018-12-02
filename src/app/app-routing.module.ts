import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTicketFromComponent } from './new-ticket-from/new-ticket-from.component';
import { HomeComponent } from './home/home.component';
import { EditTicketFormComponent } from './edit-ticket-form/edit-ticket-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentTicketsComponent } from './current-tickets/current-tickets.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsComponent } from './statistics/statistics.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newTicketForm', component: NewTicketFromComponent },
  { path: 'editTicketForm', component: EditTicketFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'CurrentTickets', component: CurrentTicketsComponent },
  { path: 'ContactUs', component: ContactComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
