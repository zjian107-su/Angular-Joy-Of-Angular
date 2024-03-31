import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css',
})
export class FilterSearchComponent implements OnInit {
  todos: Array<Todo> = [];
  filteredTodos: Array<Todo> = [];
  search: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
        next: (res) => {
          this.todos = res;
          this.filteredTodos = res;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  handleSubmit() {
    this.filteredTodos = this.todos.filter((todo) => {
      return todo.title.includes(this.search);
    });
  }
}
