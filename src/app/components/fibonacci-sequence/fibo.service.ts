import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiboService {
  constructor() {}

  fibonacciGen(n: number): number[] {
    if (n <= 0) {
      return [];
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
  }
}
