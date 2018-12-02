import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  inProgress:any = 403;
  pending:any = 311;
  completed:any = 291;
  inProgressPrec:any = this.getPrecentage(this.inProgress);
  pendingPrec:any = this.getPrecentage(this.pending);
  completedPrec:any = this.getPrecentage(this.completed);
  totalTickets:any= this.getTotal(this.completed, this.pending, this.inProgress);
  avgCompTime:string = '3 Days, 2 Hours, 13 Minutes';
  headerTitle = 'CATS Statistics';
  ngOnInit() {
  }
  getTotal(a,b,c){
    this.totalTickets = a+b+c;
    if (this.getPrecentage(this.totalTickets)){
      return a+b+c;
    }
    
  }
  getPrecentage(x){
    let a = this.completed,
      b = this.pending,
      c = this.inProgress;
    this.completedPrec = Math.round((a / x) * 100)+" %";
    this.pendingPrec = Math.round((b / x) * 100)+" %";
    this.inProgressPrec = Math.round((c / x) * 100)+" %";
    return true;
  }
    
  
}
