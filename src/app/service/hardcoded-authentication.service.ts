import { Injectable } from '@angular/core';
//ready for dependency injection
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string) {
    if (username === 'sourav' && password === 'sourav') {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    // if(user === null) {
    //   return false;
    // }
    // return true;
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
