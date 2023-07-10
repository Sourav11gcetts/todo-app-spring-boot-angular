import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  name = ''
  message = 'Some welcome message'
  welcomeMessageFromService: string | undefined;

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService
    ) {

  }
  ngOnInit() {

   // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage');
    
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVar(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage');
    
  }


  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

}
