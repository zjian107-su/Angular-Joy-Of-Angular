import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-observable-count',
  templateUrl: './observable-count.component.html',
  styleUrl: './observable-count.component.css',
})
export class ObservableCountComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription();
  timer: number = 0;
  showAlert: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count: any) => {
    //   console.log(count);
    // });

    console.log('Daniel');

    const customIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 5) {
            observer.complete();
          }
          if (count > 7) {
            observer.error(new Error('Count is greater than 5!'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObservable.subscribe({
      next: (data: number) => {
        this.timer = data;
        console.log(data);
      },
      error: (error: Error) => {
        console.log(error);
        alert(error.message);
      },
      complete: () => {
        this.showAlert = true;
        console.log('Completed!');
      },
    });
  }

  ngOnDestroy() {
    if (this.firstObsSubscription) {
      this.firstObsSubscription.unsubscribe();
    }
  }
}
