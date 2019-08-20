import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './login/auth.service';
import { TodoService } from './todos/todo.service';
import { TodosModule } from './todos/todos.module';
import { HttpErrorHandler } from './http-error-handler.service';
 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
    AppRoutingModule,
    LoginModule,
    TodosModule,
  ],
  providers: [
    AuthService,
    TodoService,
    HttpErrorHandler,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
