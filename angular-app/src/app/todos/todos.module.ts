import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
  ]
})
export class TodosModule { }
