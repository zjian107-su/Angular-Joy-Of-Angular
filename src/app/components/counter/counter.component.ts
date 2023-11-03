import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;
  timer: any = undefined;

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  toggleTimer() {
    if (this.timer) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.count++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    this.count = 0;
  }
}
