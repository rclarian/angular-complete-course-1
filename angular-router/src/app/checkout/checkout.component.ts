import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course;

  ngOnInit(){
    //Dynamic passing of data
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // })

    //this.course = this.router.getCurrentNavigation().extras.state; //this is not working
    this.course = history.state;
  }
}
