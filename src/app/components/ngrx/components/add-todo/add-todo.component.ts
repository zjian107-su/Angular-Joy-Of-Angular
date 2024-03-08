import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoActions } from '../../store/todo/todo.actions';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  @Input() lastTodoId: number = -1;

  constructor(private store: Store) {}

  title: string = '';

  addTodo(): void {
    const newTodo: Todo = {
      id: this.lastTodoId + 1,
      title: this.title,
      completed: false,
    };

    console.info('%cAddTodoComponent: add action dispatched', 'color: yellow');
    this.store.dispatch(todoActions.add({ newTodo }));
    this.title = '';
  }
}
