import { Injectable } from '@angular/core';
//ready for dependency injection
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string) {
    if (username === 'sourav' && password === 'sourav') {
      return true;
    }
    return false;
  }
}
