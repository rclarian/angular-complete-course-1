import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpEventType } from '@angular/common/http';
import { Task } from "../model/Task";
import { map, catchError, tap, take, exhaustMap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { LoggingService } from "./logging.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  loggingService: LoggingService = inject(LoggingService);
  errorSubject = new Subject<HttpErrorResponse>();
  dataBaseCon: string = 'https://angularhttpclient-9f74d-default-rtdb.firebaseio.com';
  collectionName: string = 'tasks';
  authService: AuthService = inject(AuthService);

  CreateTask(task: Task){
      const headers = new HttpHeaders({'my-header': 'hello-world'})
      this.http.post<{name: string}>(`${this.dataBaseCon}/${this.collectionName}.json`, task, {headers: headers})
          .pipe(catchError((err) => {
              //Write the logic to log errors
              const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
              this.loggingService.logError(errorObj);
              return throwError(() => err);
          }))
          .subscribe({error: (err) => {
              this.errorSubject.next(err);
          }});
  }

  DeleteTask(id: string | undefined){
      this.http.delete(`${this.dataBaseCon}/${this.collectionName}/${id}.json`)
      .pipe(catchError((err) => {
          //Write the logic to log errors
          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj);
          return throwError(() => err);
      }))
      .subscribe({error: (err) => {
          this.errorSubject.next(err);
      }});
  }

  DeleteAllTasks(){
      this.http.delete(`${this.dataBaseCon}/${this.collectionName}.json`, {observe: 'events', responseType: 'json'})
      .pipe(tap((event) => {
          console.log(event);
          if(event.type === HttpEventType.Sent){

          }
      }), catchError((err) => {
          //Write the logic to log errors
          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj);
          return throwError(() => err);
      }))
      .subscribe({error: (err) => {
          this.errorSubject.next(err);
      }})
  }

  GetAlltasks(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
        return this.http.get<{[key: string]: Task}>(`${this.dataBaseCon}/${this.collectionName}.json`, {params: new HttpParams().set('auth', user.token)})
            }), map((response) => {
                //TRANSFORM DATA
                let tasks = [];
                //console.log(response);
                for(let key in response){
                    if(response.hasOwnProperty(key)){
                    tasks.push({...response[key], id: key});
                    }              
                }
                return tasks;
            }), catchError((err) => {
                //Write the logic to log errors
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            }));
  }

  UpdateTask(id: string | undefined, data: Task){
      this.http.put(`${this.dataBaseCon}/${this.collectionName}/${id}.json`, data)
      .pipe(catchError((err) => {
          //Write the logic to log errors
          const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
          this.loggingService.logError(errorObj);
          return throwError(() => err);
      }))
      .subscribe({error: (err) => {
          this.errorSubject.next(err);
      }});
  }

  getTaskDetails(id: string | undefined){
      return this.http.get(`${this.dataBaseCon}/${this.collectionName}/${id}.json`)
      .pipe(map((response) => {
          //console.log(response)
          //Transform data
          let task = {};
          task = {...response, id: id}
          return task;
      }))
  }

}
