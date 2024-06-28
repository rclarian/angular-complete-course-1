import { Component, EventEmitter, Input, Output, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements AfterViewInit{

  @Input() isEditMode: boolean = false;
  @Input() selectedTask: Task;
  @ViewChild('taskForm') taskForm: NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  //1. pass data - EventEmitter
  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit(){
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0)
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  //2. pass data - emit on OnFormSubmitted()
  OnFormSubmitted(form: NgForm){
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }


}
