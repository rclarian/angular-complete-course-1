import { Component, DoCheck, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements DoCheck{
  counter =  signal(0);

  message = signal<string[]>([]);

  increment(){
   //this.counter.set(this.counter() + 1);
   this.counter.update((old) => old + 1);
   //this.message.push('Current counter value is: ' + this.counter);
   this.message.update((prevValue) => [...prevValue, 'Current value of counter is: ' + this.counter()]);
   //this.message.mutate((prevValue) => prevValue.push('Current value of counter is: ' + this.counter()));
   
  }

  decrement(){
    this.counter.update((old) => old - 1);
   //this.message.pop();
  }

  ngDoCheck(){
    console.log('ANGULAR CHANGE DETECTION CALLED!');
  }
}
