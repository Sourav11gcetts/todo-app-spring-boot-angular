import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrievAllTodos(username: string) {
    //we are expecting the structure of the response Todo List
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
}
