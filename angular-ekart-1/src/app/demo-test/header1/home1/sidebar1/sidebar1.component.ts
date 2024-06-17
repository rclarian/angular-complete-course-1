import { Component } from '@angular/core';
import { SubscribeService } from '../../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrl: './sidebar1.component.css'
})
export class Sidebar1Component {


  OnSubscribe(){
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('weekly');
  }
}
