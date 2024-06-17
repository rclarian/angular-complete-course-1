import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-test',
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css'
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

}
