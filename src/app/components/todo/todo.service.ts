import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  logger(message: string): void {
    console.log(message);
  }
}
