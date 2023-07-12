import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'sourav'
  password = ''
  errorMessage = 'Invalid Credentials !'
  invalidLogin = false

  constructor(private router: Router,
    private hardCodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) {

  }

  handleLogin() {
    //console.log(this.username)
    //if (this.username === 'sourav' && this.password === 'sourav') {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleJWTLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error);
          this.invalidLogin = true
        }
      )

  }
  handleBasicAuthLogin() {
    //console.log(this.username)
    //if (this.username === 'sourav' && this.password === 'sourav') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error);
          this.invalidLogin = true
        }
      )

  }

}
