import { Component, inject, OnInit, Injectable } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Subject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  dataBaseCon: string = 'https://angularhttpclientsss-9f74d-default-rtdb.firebaseio.com';
  table: string = 'tasks';
  errorSubject = new Subject<HttpErrorResponse>();

  CreateTask(task: Task){
    const header = new HttpHeaders({'may-header': 'hello-world'});
    this.http.post<{name: string}>(`${this.dataBaseCon}/${this.table}.json`, task, {headers: header})
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  DeleteTask(id: string | undefined){
    this.http.delete(`${this.dataBaseCon}/${this.table}/${id}.json`)
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  DeleteAllTask(){
    this.http.delete(`${this.dataBaseCon}/${this.table}.json`)
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  GetAllTasks(){
    return this.http.get<{[key: string]: Task}>(`${this.dataBaseCon}/${this.table}.json`)
    .pipe(map((response) => {
      
      //Transform data
      let tasks = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key})
        }
      }
      return tasks;
    }))
  }

  UpdateTask(id: string | undefined, data: Task){
    this.http.put(`${this.dataBaseCon}/${this.table}/${id}.json`, data)
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

}
