import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message:string) {}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //we are expecting the structure of the response HelloWorldBean
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log('Execute Hello World Bean Service')
  }

  executeHelloWorldBeanServiceWithPathVar(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //we are expecting the structure of the response HelloWorldBean
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`,
    {headers});
    
  }

  createBasicAuthenticationHttpHeader() {
    const username = 'sourav'
    const password = 'sourav'
    const basicAuthHeaderString = 
    'Basic ' + window.btoa(username + ':' + password)
    return basicAuthHeaderString
  }
}
