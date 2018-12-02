import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
    tasks: any;
  constructor() { 
    this.tasks = {
      store: {
          type: "odata",
          url: "https://js.devexpress.com/Demos/DevAV/odata/Tasks"
      },
      expand: "ResponsibleEmployee",
      select: [
          "Task_ID",
          "Task_Subject",
          "Task_Start_Date",
          "Task_Due_Date",
          "Task_Status",
          "Task_Priority",
          "ResponsibleEmployee/Employee_Full_Name"
      ]
  };
  }
  
  headerTitle = 'Admin';
  ngOnInit() {
  }

}
