import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../model/AuthResponse';
import { BehaviorSubject, Subject, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient);
  user = new BehaviorSubject<User>(null);
  
  signup(email: string, password: string){
    const data = {email: email, password: password, returnSecureToken: true}
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Hhe5bU3GuFnZCGmThfSofQKCQ3nThag', data)
    .pipe(catchError(this.handleError),
    tap((res) => {
      this.handleCreateUser(res);
    }))
  }

  login(email: string, password: string){
    const data = {email: email, password: password, returnSecureToken: true}
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5Hhe5bU3GuFnZCGmThfSofQKCQ3nThag', data)
    .pipe(catchError(this.handleError),
    tap((res) => {
      this.handleCreateUser(res);
    }))
  }

  private handleCreateUser(res: AuthResponse){
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
      const expiresIn = new Date(expiresInTs);
      const user = new User(res.email, res.localId, res.idToken, expiresIn);
      this.user.next(user);
  }

  private handleError(err: any){
    let errorMessage = 'An unknown error has occured';
    //console.log(err);
    if(!err.error || !err.error.error){
      return throwError(() => errorMessage);
    }

    switch (err.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = "This email address already exists.";
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = "This operation is not allowed.";
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = "To many attemps, please try again later.";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "The email does not exist.";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "The password is incorrect.";
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = "The username or password is incorrect.";
        break;
      case 'USER_DISABLED':
        errorMessage = "The username is disabled.";
        break;
      default:
        errorMessage = 'An unknown error has occured.';
        break;
    }
    return throwError(() => errorMessage)
  }
}
