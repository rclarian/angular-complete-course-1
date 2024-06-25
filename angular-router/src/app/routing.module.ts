import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthguardService } from './Services/authguard.service';
import { CanActivate, CanActivateChild } from './auth.guard';


//Define Route
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Courses', component: CoursesComponent},
    {path: 'Courses', canActivateChild: [CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetailComponent},
      {path: 'Popular', component: PopularComponent},
      {path: 'Checkout', component: CheckoutComponent}
    ]},
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent}
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
