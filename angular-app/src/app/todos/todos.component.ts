import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { AuthService } from '../login/auth.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todo_list: any = [];
  public edit_todo: Todo;

  constructor(
    private todos: TodoService,
    private _auth: AuthService,
  ) { }

  ngOnInit() {
    this.todos.set_headers();
    this.get_todos();
  }

  get_todos(): void {
    this.todos.get_todos().subscribe(data => (
      this.todo_list = data
    ))
  }

  edit(todo: Todo): void {
    this.edit_todo = todo;
  }

  add_todo(todo_title:string, todo_body: string): void {
    todo_body = todo_body.trim();
    if (!todo_body) {
      return;
    }
    const newTodo: Todo = {
      title: todo_title,
      body: todo_body
    } as Todo;
    this.todos.create_todo(newTodo).subscribe(todo => this.todo_list.push(todo));
  }

  delete_todo(todo: Todo): void {
    this.todos.delete(todo.id).subscribe(data => this.get_todos())
  }

  public update_todo():void {
    if (this.edit_todo) {
        this.todos.update(this.edit_todo).subscribe(data => this.get_todos())
    };
    this.edit_todo = undefined;
  };

}
