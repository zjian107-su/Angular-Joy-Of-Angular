import { Component } from '@angular/core';
import { Todo, todos } from '../../data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoItem: Todo = {} as Todo;
  todoList: Todo[] = [] as Todo[];
  dataLimit: number = 30;
  todoTitle: string = '';

  ngOnInit() {
    this.todoList = todos.slice(0, this.dataLimit);
    let finalList: Todo[] = [] as Todo[];
    for (let currentTodo of this.todoList) {
      if (currentTodo.completed) {
        finalList.push(currentTodo);
      } else {
        finalList.unshift(currentTodo);
      }
    }

    this.todoList = finalList;
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
