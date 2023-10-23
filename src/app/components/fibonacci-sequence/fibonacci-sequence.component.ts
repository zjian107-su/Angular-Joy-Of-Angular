import { Component } from '@angular/core';
import { FiboService } from './fibo.service';

@Component({
  selector: 'app-fibonacci-sequence',
  templateUrl: './fibonacci-sequence.component.html',
  styleUrl: './fibonacci-sequence.component.css',
})
export class FibonacciSequenceComponent {
  fibonacciSequence: number[] = [] as number[];
  inputNum: number = 0;
  hasError: boolean = false;

  constructor(public fiboService: FiboService) {}

  generateSequence(): void {
    // clean the array
    this.hasError = false;
    this.fibonacciSequence = [] as number[];

    // error handling
    if (this.inputNum === 0 || this.inputNum === null || this.inputNum < 0) {
      this.hasError = true;

      this.inputNum = 0;
      return;
    }

    // generate fibonacci sequence
    let fibonacci: number[] = [0, 1];

    for (let i = 2; i <= this.inputNum; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    this.fibonacciSequence = fibonacci;
  }
}
