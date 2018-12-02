import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-tickets',
  templateUrl: './current-tickets.component.html',
  styleUrls: ['./current-tickets.component.css']
})
export class CurrentTicketsComponent implements OnInit {

  constructor() { }
  headerTitle = 'Current Tickets';
  ngOnInit() {
  }

}
