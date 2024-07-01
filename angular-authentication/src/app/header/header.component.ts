import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{

  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;
  private userSubject: Subscription;

  ngOnInit(){
    this.userSubject = this.authService.user.subscribe((user: User) => {
      console.log(user);
      this.isLoggedIn = user ? true : false;
    });
  }

  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }

}
