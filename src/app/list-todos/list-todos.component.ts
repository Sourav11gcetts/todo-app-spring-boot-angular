import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo(1,'Learn DSA', false, new Date()),
    new Todo(2,'Fullstack Development', false, new Date()),
    new Todo(3,'Recursion', false, new Date()),
    
    // {id:2, description:'Learn Angular'},
    // {id:3, description:'Learn Spring Boot Well'},
    // {id:4, description:'Learn Other Spring Modules'}
  ]

  // todo = {
  //   id : 1,
  //   description : 'Learn Recursion'
  // }

}
