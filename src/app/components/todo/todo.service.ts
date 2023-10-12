import { Injectable } from '@angular/core';
import { Todo, todos } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  dataLimit: number = 30;
  todoList: Todo[] = [] as Todo[];

  constructor() {}

  initializeTodoList(): void {
    let finalList: Todo[] = [] as Todo[];
    this.todoList = todos.slice(0, this.dataLimit);
    for (let currentTodo of this.todoList) {
      if (currentTodo.completed) {
        finalList.push(currentTodo);
      } else {
        finalList.unshift(currentTodo);
      }
    }

    this.todoList = finalList;
    this.logger('TodoComponent initialized');
  }

  logger(message: string): void {
    console.log(message);
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoList = this.todoList.filter((item) => item !== todo);

    if (todo.completed) {
      //move bottom when marked as complete
      this.todoList.push(todo);
    } else {
      //move top when marked as incomplete
      this.todoList.unshift(todo);
    }
  }

  createTodo(title: string): void {
    let newTodo: Todo = {
      userId: 1,
      id: this.dataLimit + 1,
      title: title,
      completed: false,
    };

    this.todoList.unshift(newTodo);
  }
}
