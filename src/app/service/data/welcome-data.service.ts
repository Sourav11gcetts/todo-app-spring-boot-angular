import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
    //we are expecting the structure of the response HelloWorldBean
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`);
    
  }
}
