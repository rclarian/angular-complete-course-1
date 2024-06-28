import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  //4. pass data - get the data here CreateTask(data: Task)
  CreateTask(data: Task){
    const header = new HttpHeaders({'may-header': 'hello-world'});
    this.http.post<{name: string}>('https://angularhttpclient-9f74d-default-rtdb.firebaseio.com/tasks.json', data, {headers: header})
    .subscribe((response) => {
      console.log(response);
    });
  }

  private fetchAllTasks(){
    this.http.get<{[key: string]: Task}>('https://angularhttpclient-9f74d-default-rtdb.firebaseio.com/tasks.json')
    .pipe(map((response) => {
      
      //Transform data
      let tasks = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key})
        }
      }
      return tasks;

    })).subscribe((tasks) => {
      console.log(tasks);
    })
  }

  ngOnInit(){
    this.fetchAllTasks();
  }
}
