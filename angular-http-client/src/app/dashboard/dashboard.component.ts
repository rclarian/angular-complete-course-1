import { Component } from '@angular/core';
import { Task } from '../Model/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  //4. pass data - get the data here CreateTask(data: Task)
  CreateTask(data: Task){
    console.log('Dashboard: ' + data);
  }


}
