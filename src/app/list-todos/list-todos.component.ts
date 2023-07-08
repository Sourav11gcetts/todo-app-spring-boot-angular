import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    {id:1, description:'Learn DSA'},
    {id:2, description:'Learn Angular'},
    {id:3, description:'Learn Spring Boot Well'},
    {id:4, description:'Learn Other Spring Modules'}
  ]

  todo = {
    // id : 1,
    // description : 'Learn Recursion'
  }

}
