import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  constructor(public todoService: TodoService) {}
}
