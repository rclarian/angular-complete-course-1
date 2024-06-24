import { Component, ElementRef, ViewChild, inject, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @ViewChild('username') uname: ElementRef;
  @ViewChild('password') pass: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout'));

      if(logout){
        this.authService.logout();
        alert('You are now logged out. Islogged = ' + this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){
    const username = this.uname.nativeElement.value;
    const password = this.pass.nativeElement.value;

    const user = this.authService.login(username, password);
    
    if(user === undefined){
      alert('The login credentials you have entered is not correct.');
    }
    else{
      alert('Welcome' + ' ' + user.name + ' ' +'you are logged in.');
      this.router.navigate(['/Courses']);
    }

  }

}
