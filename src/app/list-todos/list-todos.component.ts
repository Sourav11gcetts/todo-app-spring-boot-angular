import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  message: string | undefined
 

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(): void {
    this.todoService.retrievAllTodos('sourav').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  updateTodo(id:number) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  deleteTodo(id:number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('sourav',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }



}
