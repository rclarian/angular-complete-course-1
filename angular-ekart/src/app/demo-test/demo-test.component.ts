import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import {NgIf, NgFor, NgForOf, CommonModule} from "@angular/common";

@Component({
  selector: 'demo-test',
  standalone: true,
  imports: [NgIf, ParentComponent],
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css'
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
}
