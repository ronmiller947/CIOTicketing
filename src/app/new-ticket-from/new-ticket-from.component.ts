import { Component, OnInit } from '@angular/core';
import { newTicketForm, Service } from './new-ticket-from.service';
@Component({
  selector: 'app-new-ticket-from',
  providers: [Service],
  templateUrl: './new-ticket-from.component.html',
  styleUrls: ['./new-ticket-from.component.css']
})
export class NewTicketFromComponent implements OnInit {
  newTicketForm: newTicketForm;
  forYouorSomeoneElse:string[];
  ForNewOrExistingTickets:string[];
  Directorates:string[];
  OfficeSymbols:string[];
  Areas:string[];
  Services:string[];
  headerTitle:string = "New Ticket"
  constructor(service: Service) { 
    this.forYouorSomeoneElse = service.forYouorSomeoneElse();
    this.ForNewOrExistingTickets = service.ForNewOrExistingTickets();
    this.Directorates = service.Directorates();
    this.OfficeSymbols = service.OfficeSymbols();
    this.Areas = service.Areas();
    this.Services = service.Services();
  }


  ngOnInit() {
  }
  



}

