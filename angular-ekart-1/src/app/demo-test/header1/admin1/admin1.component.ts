import { Component, Inject } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrl: './admin1.component.css'
  //providers: [UserService]
})
export class Admin1Component {

  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
    //console.log(this.userService.users);
  }
}
