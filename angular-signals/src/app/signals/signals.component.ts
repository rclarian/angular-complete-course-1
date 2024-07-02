import { Component, DoCheck, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements DoCheck{
  counter =  signal(0);

  message: string[] = [];

  increment(){
   //this.counter.set(this.counter() + 1);
   this.counter.update((old) => old + 1)
   this.message.push('Current counter value is: ' + this.counter);
  }

  decrement(){
   this.counter;
   this.message.pop();
  }

  ngDoCheck(){
    console.log('ANGULAR CHANGE DETECTION CALLED!');
  }
}
