import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  courseService = inject(CourseService);
  popularCourses: Course[] = [];

  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    //this.router.navigate(['Courses'], {relativeTo: this.activeRoute}); //appended to active url
    //this.router.navigate(['Courses']);//first method
    this.router.navigateByUrl('Courses'); //second method
  }
}
