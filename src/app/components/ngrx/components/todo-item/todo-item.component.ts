import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../interfaces/todo';
import { selectTodoById } from '../../store/todo/todo.selectors';
import { todoActions } from '../../store/todo/todo.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  constructor(private store: Store) {}
  @Input() todoId: number = -1; // The single todoId received from the AppComponent, used later for selecting individual todos from the store.

  todo: Todo = {} as Todo;

  showEdit: boolean = false;

  title: string = '';

  selectTodoByIdSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.selectTodoByIdSubscription = this.store
      .select(selectTodoById(this.todoId))
      .subscribe({
        next: (todo) => {
          if (!todo) return;
          this.todo = todo;
          this.title = todo.title;
        },
      });
    // select the single todo data according to the todoId Input
  }

  ngOnDestroy(): void {
    this.selectTodoByIdSubscription?.unsubscribe();
  }

  deleteTodo(): void {
    console.info(
      '%cTodoItemComponent: delete action dispatched',
      'color: yellow'
    );
    this.store.dispatch(todoActions.delete({ id: this.todoId }));
  }

  toggleTodo(): void {
    console.info(
      '%cTodoItemComponent: toggle action dispatched',
      'color: yellow'
    );
    this.store.dispatch(todoActions.toggle({ id: this.todoId }));
  }

  toggleEdit(): void {
    this.showEdit = !this.showEdit;
    this.title = this.todo.title;
  }

  editTodo(): void {
    if (!this.title.length) return;
    const updatedTodo: Todo = {
      ...this.todo,
      title: this.title,
    };
    console.info(
      '%cTodoItemComponent: update action dispatched',
      'color: yellow'
    );
    this.store.dispatch(todoActions.update({ updatedTodo }));
  }
}
