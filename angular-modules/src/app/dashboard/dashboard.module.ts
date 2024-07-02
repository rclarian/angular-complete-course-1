import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { SharedModule } from '../shared.module';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { canActivate } from '../RouteGuards/authGuard';

const routes: Routes = [
  { path: 'dashboard', canActivate: [canActivate], children: [
    {path: 'overview', component: OverviewComponent},
    {path: 'stats', component: StatsComponent}
  ] }
]

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent
  ],
  exports: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }