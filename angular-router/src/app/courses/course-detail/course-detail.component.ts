import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(){
    //this.courseId = this.activeRoute.snapshot.params['id']; // old format
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id'); // plus convert string to number

    //params ----
    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    // })

    //paramMap -----
    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    })
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
