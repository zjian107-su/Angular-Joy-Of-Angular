import { Component } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoItem: Todo = {} as Todo;
}
