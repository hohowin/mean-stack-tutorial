import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private token: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }
 
  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post("http://localhost:3333/api/users/signup", authData)
      .subscribe(res => {
        console.log(res);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{token: string}>("http://localhost:3333/api/users/login", authData)
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
        }
      );
  }
}
