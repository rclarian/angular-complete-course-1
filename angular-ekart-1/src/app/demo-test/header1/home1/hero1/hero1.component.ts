import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../../Services/subscribe.service';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css'
  //providers: [SubscribeService] //2. What to provide
})
export class Hero1Component {

   //1. How to provide dependency
  //  constructor(private subService: SubscribeService){

  //  }

  subService = inject(SubscribeService);

  OnSubscribe(){
    //let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('daily');
  }
}
