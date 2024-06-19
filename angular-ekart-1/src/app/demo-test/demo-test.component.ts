import { Component, ViewEncapsulation } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'demo-test',
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css'
  //providers: [SubscribeService]
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoTestComponent {
  title = 'Angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor(){
   console.log('Demo-test component constructor called.');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit hook of app component called');
  //   //console.log('In ngAfterViewInit',  this.tempPara);
  // }

  // ngAfterViewChecked () {
  //   console.log('ngAfterViewChecked hook of app component called');
  //   //console.log('In ngAfterViewInit',  this.tempPara);
  // }
  
  DestroyComponent() {
    this.toDestroy = !this.toDestroy;
  }

  textValue: string = 'Hello, World,';

  logValue(){
    console.log('Input has been focused!');
  }

  active: boolean = false;
  display: boolean = false;

  displayTermsOfServices(){
    this.display = true;
  }

  hideTermsOfServices(){
    this.display = false;
  }

  tab: string = '';

  onInfoClicked(){
    this.tab = 'info';
  }
  onServiceClicked(){
    this.tab = 'service';
  }
  onPrivacyClicked(){
    this.tab = 'privacy';
  }
  onUserAggrementClicked(){
    this.tab = 'user';
  }

  //#69-71 Creating & Using an Observable
  data: any[] = [];

  array1 = [1, 3, 5, 6, 9];
  array2 = ['A', 'B', 'C', 'D'];

  //1.Create an OBSERVABLE

  //Observable
  // myObservable = new Observable((observer) => {
  //   //observer.next([1, 2, 3, 4, 5]); //array
  //   setTimeout(() => { observer.next(1)}, 1000); //data streaming
  //   setTimeout(() => { observer.next(2)}, 2000);
  //   setTimeout(() => { observer.next(3)}, 3000);
  //   //setTimeout(() => { observer.error(new Error('Something wrong. Please try again later'))}, 3000);
  //   setTimeout(() => { observer.next(4)}, 4000);
  //   setTimeout(() => { observer.next(5)}, 5000);
  //   setTimeout(() => { observer.complete()}, 6000);
  // });

  //of
  myObservable = of(this.array1, this.array2, [22,'aa', 11, 'cc']);

  GetAsyncData(){

    //Observer
    //call back function next, error, complete
    //Obsolete
    // this.myObservable.subscribe((val: any) => {
    //   //this.data = val; //for array
    //   this.data.push(val);
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // () => {
    //   alert('All the date is streamed');
    // });

    //Latest format
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the date is streamed');
      }
    })
  }
  //end #69-71
}
