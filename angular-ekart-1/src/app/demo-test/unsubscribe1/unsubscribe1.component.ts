import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe1',
  templateUrl: './unsubscribe1.component.html',
  styleUrl: './unsubscribe1.component.css'
})
export class Unsubscribe1Component {
  counter = interval(1000);
  data: number[] = [];
  subscriber1;

  OnSubscribe(){
    this.subscriber1 = this.counter.subscribe((val) => {
      this.data.push(val);
    });
  }

  OnUnsubscribe(){
    this.subscriber1.unsubscribe();
  }
}
