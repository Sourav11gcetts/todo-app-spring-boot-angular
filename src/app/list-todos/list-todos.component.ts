import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
export class ListTodosComponent implements OnInit{

  todos: Todo[] | undefined
  // = [
  //   new Todo(1,'Learn DSA', false, new Date()),
  //   new Todo(2,'Fullstack Development', false, new Date()),
  //   new Todo(3,'Recursion', false, new Date()),
  //   // {id:2, description:'Learn Angular'},
  //   // {id:3, description:'Learn Spring Boot Well'},
  //   // {id:4, description:'Learn Other Spring Modules'}
  // ]
  // todo = {
  //   id : 1,
  //   description : 'Learn Recursion'
  // }
  
  // = [
  //   new Todo(1,'Learn DSA', false, new Date()),
  //   new Todo(2,'Fullstack Development', false, new Date()),
  //   new Todo(3,'Recursion', false, new Date()),
    
  //   // {id:2, description:'Learn Angular'},
  //   // {id:3, description:'Learn Spring Boot Well'},
  //   // {id:4, description:'Learn Other Spring Modules'}
  // ]

  // todo = {
  //   id : 1,
  //   description : 'Learn Recursion'
  // }

  constructor(
    private todoService:TodoDataService
  ) {

  }

  ngOnInit(): void {
    this.todoService.retrievAllTodos('sourav').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
