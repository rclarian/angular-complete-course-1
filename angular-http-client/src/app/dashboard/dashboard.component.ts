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
  currentTaskId: string = '';
  isLoading: boolean = false;

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

  OnEditTaskClicked(id: string | undefined){
    this.currentTaskId = id;
    //Open edit task form
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => {return task.id === id});
  }

  //4. pass data - get the data here CreateTask(data: Task)
  CreateOrUpdateTask(data: Task){
    if(!this.editMode){
      this.taskService.CreateTask(data);
    }else{
      this.taskService.UpdateTask(this.currentTaskId, data);
    }
  }

  private fetchAllTasks(){
    this.isLoading = true;
    this.taskService.GetAllTasks().subscribe((tasks) => {
      this.allTasks = tasks;
      this.isLoading = false;
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

  ngOnInit(){
    this.fetchAllTasks();
  }
}
