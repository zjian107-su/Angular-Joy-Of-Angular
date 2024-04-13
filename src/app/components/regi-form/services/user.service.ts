import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [] as User[];
  isAscending: boolean = true;

  constructor(private http: HttpClient) {}

  getUserObs(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUsers(): void {
    this.getUserObs().subscribe({
      next: (users: User[]) => (this.users = users),
      complete: () => {},
    });
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  toggleOrder(): void {
    this.isAscending = !this.isAscending;
    this.users = this.users.sort((a: User, b: User) => {
      return this.isAscending ? a.id - b.id : b.id - a.id;
    });
  }
}
