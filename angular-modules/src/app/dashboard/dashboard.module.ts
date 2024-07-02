import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent
  ],
  exports: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }