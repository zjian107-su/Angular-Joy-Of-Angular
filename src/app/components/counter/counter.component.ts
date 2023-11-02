import { Component } from '@angular/core';
import { Subject, filter, tap } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;
  timer: any = undefined;
  processedCount = 0;
  timerSubject$: Subject<number> = new Subject();

  ngOnInit() {
    this.timerSubject$
      .pipe(
        filter((count) => count % 2 === 0),
        tap((count) => {
          console.log('debug for count: ', count);
          // this.processedCount = count;
        })
      )
      .subscribe((count) => {
        this.processedCount = count;
      });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.timerSubject$.unsubscribe();
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
      this.timerSubject$.next(this.count + 1);
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    this.count = 0;
    this.processedCount = 0;
  }
}
