import { Component } from '@angular/core';
import { Todo, todos } from '../../data';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.initializeTodoList();
  }
}
