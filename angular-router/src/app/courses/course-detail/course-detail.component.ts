import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    //this.courseId = this.activeRoute.snapshot.params['id']; // old format
    this.courseId = +this.activeRoute.snapshot.paramMap.get('id'); // plus convert string to number
    this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
  }
}
