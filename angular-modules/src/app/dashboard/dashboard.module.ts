import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { SharedModule } from '../shared.module';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { DashboardRouteModule } from './dashboard-route.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent
  ],
  exports: [
    // DashboardComponent, // commented because have a separate routing module
    // CreateTaskComponent,
    // TaskDetailsComponent,
    SharedModule,
    DashboardRouteModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class DashboardModule { }