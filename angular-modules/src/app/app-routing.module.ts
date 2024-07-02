import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'; 
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule)},
  { path: 'login', loadChildren: () => import('./login/auth.module').then((mod) => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], //Pre loading
  exports: [RouterModule]
})
export class AppRoutingModule { }
