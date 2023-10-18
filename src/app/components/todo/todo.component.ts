import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  todoTitle: string = '';

  constructor(public todoService: TodoService) {}

  createTodo(): void {
    this.todoService.createTodo(this.todoTitle);
    this.todoTitle = '';
  }
}
