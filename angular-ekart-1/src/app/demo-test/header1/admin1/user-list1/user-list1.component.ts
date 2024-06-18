import { Component, Inject } from '@angular/core';
import { UserService } from '../../../../Services/user.service';
import { USER_TOKEN } from '../../../../app.module';
import { User } from '../../../../Models/User';

@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list1.component.html',
  styleUrl: './user-list1.component.css'
  //providers: [UserService]
})
export class UserList1Component {
  
  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }

  userList = this.userService.GetAllUsers();

  ShowUserDetails(user: User){
    this.userService.OnShowUserDetails(user);
  }
}
