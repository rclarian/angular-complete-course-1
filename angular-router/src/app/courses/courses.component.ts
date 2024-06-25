import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    //this.searchString = this.activeRoute.snapshot.queryParams['search']; //queryString
    //this.searchString = this.activeRoute.snapshot.queryParamMap.get('search'); //queryString
    //console.log(this.searchString);

    //queryParams
    // this.activeRoute.queryParams.subscribe((data) => {
    //   this.searchString = data['search'];

    //   if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
    //     this.AllCourses = this.coursesService.courses; 
    //   }else{
    //     this.AllCourses = this.coursesService.courses
    //       .filter(x => x.title.toLowerCase()
    //       .includes(this.searchString.toLowerCase())); 
    //   }

    // })

    //queryParamMap -- this is recommended to use
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        this.coursesService.getAllcourses().subscribe((data) => {
          this.AllCourses = data;
        }); 
      }else{
        this.AllCourses = this.coursesService.courses
          .filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase())); 
      }

    })

  }
}
