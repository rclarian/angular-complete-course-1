import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../../Models/User';
import { UserService } from '../../../../Services/user.service';
import {USER_TOKEN} from '../../../../../app/app.module';

@Component({
  selector: 'app-user-detail1',
  templateUrl: './user-detail1.component.html',
  styleUrl: './user-detail1.component.css'
})
export class UserDetail1Component implements OnInit {

  selectedUser: User;
  userService = inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      //console.log(this.selectedUser);
    });
  }

}
