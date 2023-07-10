import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'
//ready for dependency injection
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }

  executeAuthenticationService(username:string, password:string) {
    const basicAuthHeaderString = 
    'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
      )
    );
    
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message:string) {

  }
}
