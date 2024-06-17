import { Component } from '@angular/core';
import { SubscribeService } from '../../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrl: './sidebar1.component.css',
  providers: [SubscribeService] //2. What to provide
})
export class Sidebar1Component {

  //1. How to provide dependency
  constructor(private subService: SubscribeService){

  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('weekly');
  }
}
