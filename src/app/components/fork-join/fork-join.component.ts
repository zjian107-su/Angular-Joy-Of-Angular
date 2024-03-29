import { Component } from '@angular/core';
import { of, forkJoin, Observable, merge } from 'rxjs';

// merge
// •	Combines multiple observables into one.
// •	Emits values from all input observables as they occur.
// •	Continues to emit values as long as any input observable is still emitting.
// •	Completes only when all input observables have completed.

// forkJoin
// •	Combines multiple observables into one.
// •	Waits for all input observables to complete.
// •	Emits the last emitted value from each input observable as an array or object.
// •	Completes immediately after emitting this single value.

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css',
})
export class ForkJoinComponent {
  Observable1: Observable<number> = of(1, 2, 3, 4, 5);
  Observable2: Observable<number> = of(6, 7, 8, 9, 10);

  // Method 01:
  // combined: Observable<number[]> = forkJoin(this.Observable1, this.Observable2);

  // Method 02:
  // combined: Observable<number[]> = forkJoin([
  //   this.Observable1,
  //   this.Observable2,
  // ]);

  // Method 03:
  combined: Observable<{ first: number; second: number }> = forkJoin({
    first: this.Observable1,
    second: this.Observable2,
  });

  merged: Observable<number> = merge(this.Observable1, this.Observable2);

  ngOnInit() {
    this.combined.subscribe((data) => {
      console.log('forkJoin) ', data);
    });
    this.merged.subscribe((data) => {
      console.log('merge', data);
    });
  }
}
