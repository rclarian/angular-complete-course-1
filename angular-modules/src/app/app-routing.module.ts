import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { canActivate } from './RouteGuards/authGuard';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { StatsComponent } from './dashboard/stats/stats.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'dashboard', canActivate: [canActivate], children: [
    {path: 'overview', component: OverviewComponent},
    {path: 'stats', component: StatsComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
