import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderComponent } from '../utility/loader/loader.component';
import { SnackbarComponent } from '../utility/snackbar/snackbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  exports: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class DashboardModule { }