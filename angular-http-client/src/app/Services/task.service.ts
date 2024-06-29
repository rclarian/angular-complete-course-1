import { Component, inject, OnInit, Injectable } from '@angular/core';
import { Task } from '../Model/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Subject, catchError, map, throwError } from 'rxjs';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  loggingService: LoggingService = inject(LoggingService);
  dataBaseCon: string = 'https://angularhttpclient-9f74d-default-rtdb.firebaseio.com';
  collectionName: string = 'tasks';
  errorSubject = new Subject<HttpErrorResponse>();

  CreateTask(task: Task){
    const header = new HttpHeaders({'may-header': 'hello-world'});
    this.http.post<{name: string}>(`${this.dataBaseCon}/${this.collectionName}.json`, task, {headers: header})
    .pipe(catchError((err) => {
      //Write the logic to log errors
      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
      this.loggingService.logError(errorObj);

      return throwError(() => err);
    }))
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  DeleteTask(id: string | undefined){
    this.http.delete(`${this.dataBaseCon}/${this.collectionName}/${id}.json`)
    .pipe(catchError((err) => {
      //Write the logic to log errors
      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
      this.loggingService.logError(errorObj);

      return throwError(() => err);
    }))
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  DeleteAllTask(){
    this.http.delete(`${this.dataBaseCon}/${this.collectionName}.json`)
    .pipe(catchError((err) => {
      //Write the logic to log errors
      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
      this.loggingService.logError(errorObj);

      return throwError(() => err);
    }))
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

  GetAllTasks(){
    return this.http.get<{[key: string]: Task}>(`${this.dataBaseCon}/${this.collectionName}.json`)
    .pipe(map((response) => {
      
      //Transform data
      let tasks = [];

      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({...response[key], id: key})
        }
      }
      return tasks;
    }), catchError((err) => {
      //Write the logic to log errors
      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
      this.loggingService.logError(errorObj);

      return throwError(() => err);
    }))
  }

  UpdateTask(id: string | undefined, data: Task){
    this.http.put(`${this.dataBaseCon}/${this.collectionName}/${id}.json`, data)
    .pipe(catchError((err) => {
      //Write the logic to log errors
      const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()};
      this.loggingService.logError(errorObj);

      return throwError(() => err);
    }))
    .subscribe({error: (err) => {
      this.errorSubject.next(err); //emited error
    }});
  }

}
