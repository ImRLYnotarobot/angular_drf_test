import {Component, OnInit} from '@angular/core';
import {throwError} from 'rxjs';
import { AuthService } from './login/auth.service';
import { Router } from '@angular/router';
import { TodoService } from './todos/todo.service';
// import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
  constructor(
    public _auth: AuthService,
    private router: Router,
    // private todos: TodoService
  ) {
    if (!this._auth.token) {
      router.navigate(['/login/']);
    } else {
      this.router.navigate(['/todo/']);
    }
  }
 
  ngOnInit() {
  }
 
}

