import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //CreateTask: EventEmitter<string> = new EventEmitter<string>();
  CreateTask = new Subject<string>();

  OnCreateTask(value: string){
    //this.CreateTask.emit(value);
    this.CreateTask.next(value);
  }
}
