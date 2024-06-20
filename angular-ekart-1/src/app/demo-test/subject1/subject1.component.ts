import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrl: './subject1.component.css'
})
export class Subject1Component implements OnInit{

  ngOnInit(){
    let obs = new Observable((observer) => {observer.next(Math.random())});

    //Subscriber 1
    obs.subscribe((data) => {console.log(data)});

    //Subscriber 2
    obs.subscribe((data) => {console.log(data)});

  }

}
