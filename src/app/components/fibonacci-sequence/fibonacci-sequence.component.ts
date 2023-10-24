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

  constructor(private fiboService: FiboService) {}

  generateSequence(): void {
    this.fibonacciSequence = [] as number[];
    this.hasError = false;
    if (this.inputNum <= 0) {
      this.hasError = true;
      return;
    }
    this.fibonacciSequence = this.fiboService.fibonacciGen(this.inputNum);
  }
}
