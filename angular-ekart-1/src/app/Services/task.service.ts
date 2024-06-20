import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  CreateTask: EventEmitter<string> = new EventEmitter<string>();

  OnCreateTask(value: string){
    this.CreateTask.emit(value);
  }
}
