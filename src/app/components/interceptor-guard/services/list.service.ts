import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  users: User[] = [] as User[];
  posts: Post[] = [] as Post[];

  constructor(private http: HttpClient) {}

  getUsers(): void {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => (this.users = data),
      });
  }

  getPosts(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => (this.posts = data),
      });
  }
}
