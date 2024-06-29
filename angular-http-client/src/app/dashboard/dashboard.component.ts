import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TaskService } from '../Services/task.service';
import { error } from 'node:console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy{
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);
  currentTaskId: string = '';
  isLoading: boolean = false;

  errorMessage: string | null = null;
  errorSub: Subscription;

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
    this.taskService.GetAllTasks().subscribe({next: (tasks) => {
      this.allTasks = tasks;
      this.isLoading = false;

    }, error: (error) => {
      this.setErrorMessage(error);
      this.isLoading = false;
    }})
  }

  private setErrorMessage(err: HttpErrorResponse){
    if(err.error.error === 'Permission denied'){
      this.errorMessage = 'You do not have permission to perform to this action';
    }else{
      this.errorMessage = err.message;
    }

    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
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
    this.errorSub = this.taskService.errorSubject.subscribe({next: (httpError) => {
      this.setErrorMessage(httpError);
    }})
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

}
