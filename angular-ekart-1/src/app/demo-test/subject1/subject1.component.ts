import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrl: './subject1.component.css'
})
export class Subject1Component implements OnInit{

  ngOnInit(){
    //let obs = new Observable((observer) => {observer.next(Math.random())});
    //const subject = new Subject();
    const subject = new BehaviorSubject<number>(1000);

    //Subscriber 1
    subject.subscribe((data) => {console.log('result 1' + ' = ' + data)});

    //Subscriber 2
    subject.subscribe((data) => {console.log('result 2' + ' = ' + data)});

    subject.next(Math.random());

    //Subscriber 3
    subject.subscribe((data) => {console.log('result 3' + ' = ' + data)});

    //Ajax call
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res) => {console.log(res)});
    // subject.subscribe((res) => {console.log(res)});
    // subject.subscribe((res) => {console.log(res)});

    // data.subscribe(subject);
  }

}
