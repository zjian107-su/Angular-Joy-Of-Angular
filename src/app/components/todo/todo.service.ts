import { Injectable } from '@angular/core';
import { Todo, todos } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  dataLimit: number = 30;
  todoList: Todo[] = [] as Todo[];
  todoTitle: string = '';

  constructor() {}

  initializeTodoList(): void {
    this.todoList = todos.slice(0, this.dataLimit);

    this.todoList.sort((a, b) => {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    });
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;

    const index = this.todoList.indexOf(todo);

    if (index > -1) {
      this.todoList.splice(index, 1);
    }

    if (todo.completed) {
      //move bottom when marked as complete
      this.todoList.push(todo);
    } else {
      //move top when marked as incomplete
      this.todoList.unshift(todo);
    }
  }

  createTodo(): void {
    let newTodo: Todo = {
      userId: 1,
      id: this.dataLimit + 1,
      title: this.todoTitle,
      completed: false,
    };

    this.todoList.unshift(newTodo);
    this.todoTitle = '';
  }
}
