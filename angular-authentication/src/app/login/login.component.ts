import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
      //Login logic
      return;
    }else{
      //signup logic
      this.isLoading = true;
      this.authService.signup(email, password).subscribe({
        next: (res) => { 
          //console.log(res) 
          this.isLoading = false;
        },
        error: (errMsg) => { 
          this.isLoading = false;
          this.errorMessage = errMsg;
          this.hideSnackbar();
        }
      });
    }

    form.reset();
  }

  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

}
