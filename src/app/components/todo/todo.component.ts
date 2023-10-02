import { Component } from '@angular/core';
import { Todo, todos } from '../../data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoItem: Todo = {} as Todo;
  todoList: Todo[] = [];

  ngOnInit() {
    this.todoList = todos.slice(0, 30);
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
