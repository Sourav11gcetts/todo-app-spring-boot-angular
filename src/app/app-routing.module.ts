import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

//welcome -> new route
const routes: Routes = [
  //path at which we want to expose it and which component
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent,canActivate:[RouteGuardService] },
  { path: 'todos', component: ListTodosComponent,canActivate:[RouteGuardService] },
  { path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent,canActivate:[RouteGuardService] },
  //** -> above are the paths anithing else route it to here
  //keep this at the last 
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
