import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
})
export class Header1Component {

  selectedTab: string = 'home';

  //When home link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When admin link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('monthly');
  }

}
