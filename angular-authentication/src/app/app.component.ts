import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  title = 'angular-authentication';

  ngOnInit(){
    this.authService.autoLogin()
  }
}
