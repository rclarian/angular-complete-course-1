import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.css'
  //providers: [SubscribeService] //2. What to provide
})
export class Header1Component {

    //1. How to provide dependency
  constructor(private subService: SubscribeService){

  }

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
    //let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('monthly');
  }

}
