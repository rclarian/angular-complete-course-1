import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../model/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http: HttpClient = inject(HttpClient);
  
  signup(email, password){
    const data = {email: email, password: password, returnSecureToken: true}
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Hhe5bU3GuFnZCGmThfSofQKCQ3nThag', data)
  }


}
