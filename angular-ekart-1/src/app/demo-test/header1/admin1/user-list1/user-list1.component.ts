import { Component } from '@angular/core';
import { UserService } from '../../../../Services/user.service';

@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list1.component.html',
  styleUrl: './user-list1.component.css'
  //providers: [UserService]
})
export class UserList1Component {
  
  constructor(private userService: UserService){

  }

  userList = this.userService.GetAllUsers();
}
