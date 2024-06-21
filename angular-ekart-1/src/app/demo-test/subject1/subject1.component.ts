import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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
    //const subject = new BehaviorSubject<number>(1000);
    // const subject = new ReplaySubject(2);

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    //Subscriber 1
    //subject.subscribe((data) => {console.log('Subscriber 1' + ' = ' + data)});

    //Subscriber 2
    //subject.subscribe((data) => {console.log('Subscriber 2' + ' = ' + data)});

    //subject.next(Math.random());
    //subject.next(2020);

    //Subscriber 3
    //subject.subscribe((data) => {console.log('Subscriber 3' + ' = ' + data)});

    //subject.next(2023);

    //Ajax call
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res) => {console.log(res)});
    // subject.subscribe((res) => {console.log(res)});
    // subject.subscribe((res) => {console.log(res)});

    // data.subscribe(subject);

    //#78 Async Subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // asyncSubject.complete();
    // asyncSubject.next(400);

    // asyncSubject.subscribe((data) => {console.log('Subscriber 1' + ' = ' + data)});
    // asyncSubject.subscribe((data) => {console.log('Subscriber 2' + ' = ' + data)});

    //#79 Promise vs Observable
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(100);
      resolve(200);
      resolve(300);
    });    

    promise.then((data) => {
      console.log('Promise' + ' - ' + data);
    });

    const obs = new Observable((sub) => {
      console.log('Observable is called');
      sub.next(150);
      sub.next(250);
      sub.next(350);
    })
    obs.subscribe((data) => {
      console.log('Observable' + ' - ' + data);
    });

  }

}
