import { Component } from '@angular/core';
import { SubscribeService } from '../../../../Services/subscribe.service';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css'
})
export class Hero1Component {


  OnSubscribe(){
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('daily');
  }
}
