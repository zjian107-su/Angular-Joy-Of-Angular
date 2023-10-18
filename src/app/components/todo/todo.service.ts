import { Injectable } from '@angular/core';
import { Todo, todos } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // basic functionality: CRUD
  todoList: Todo[] = [] as Todo[];
  DATA_LIMIT: number = todos.length;

  // advanced functionality: pagination
  PAGE_SIZE = 30;
  currentTodos: Todo[] = [] as Todo[];
  page: number = 1;
  pageList: number[] = [] as number[];

  constructor() {
    this.initializeTodoList();
  }

  // basic functionality
  initializeTodoList(): void {
    this.todoList = todos.slice(0, this.DATA_LIMIT);
    this.todoList.sort((a, b) => {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    });
    this.getTodoDetails(this.todoList);
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

    this.getTodoDetails(this.todoList);
  }

  createTodo(title: string): void {
    let newTodo: Todo = {
      userId: 1,
      id: this.todoList.length + 1,
      title: title,
      completed: false,
    };

    this.todoList.unshift(newTodo);

    this.getTodoDetails(this.todoList);
  }

  // advanced functionality
  getTodoDetails(data: Todo[], currentPage: number = 1): void {
    const pages = Math.ceil(data.length / this.PAGE_SIZE);
    this.pageList = Array.from({ length: pages }, (v, i) => i + 1);
    this.page = currentPage;
    this.currentTodos = data.slice(
      (currentPage - 1) * this.PAGE_SIZE,
      currentPage * this.PAGE_SIZE
    );
  }

  onClickPage(page: number): void {
    this.getTodoDetails(this.todoList, page);
  }

  onChangePageSize(newSize: number): void {
    this.PAGE_SIZE = newSize;
    this.getTodoDetails(this.todoList, 1);
  }

  isCurrentPage(page: number): boolean {
    return this.page === page;
  }
}
