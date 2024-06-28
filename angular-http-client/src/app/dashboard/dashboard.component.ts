import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);

  editMode: boolean = false;
  selectedTask: Task;

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {
      title: '',
      description: '',
      assignedTo: '',
      createdAt: '',
      priority: '',
      status: '',
      id: ''
    };
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  //4. pass data - get the data here CreateTask(data: Task)
  CreateTask(data: Task){
    this.taskService.CreateTask(data);
  }

  private fetchAllTasks(){
    this.taskService.GetAllTasks().subscribe((tasks) => {
      this.allTasks = tasks;
    })
  }

  FetchAllTaskClicked(){
    this.fetchAllTasks();
  }

  DeleteAllTask(){
    this.taskService.DeleteAllTask();
  }

  DeleteTask(id: string | undefined){
    this.taskService.DeleteTask(id);
  }

  OnEditTaskClicked(id: string | undefined){
    //Open edit task form
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => {return task.id === id});
  }

  ngOnInit(){
    this.fetchAllTasks();
  }
}
