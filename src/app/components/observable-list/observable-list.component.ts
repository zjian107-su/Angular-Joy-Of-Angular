import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Item {
  name: string;
  age: number;
}

@Component({
  selector: 'app-observable-list',
  templateUrl: './observable-list.component.html',
  styleUrl: './observable-list.component.css',
})
export class ObservableListComponent {
  allItemsList: Item[] = [
    { name: 'John', age: 20 },
    { name: 'Lucy', age: 30 },
    { name: 'Amy', age: 40 },
  ];

  private allItemsSub$ = new BehaviorSubject<Item[]>([]);
  allItemsObs$: Observable<Item[]> = this.allItemsSub$.asObservable();

  ngOnInit() {
    this.allItemsSub$ = new BehaviorSubject(this.allItemsList);
    this.allItemsObs$ = this.allItemsSub$.asObservable();
  }

  showItems(): void {
    console.log(this.allItemsSub$.getValue()[0]);
    this.allItemsSub$.next([
      ...this.allItemsSub$.getValue(),
      { name: 'MILK', age: 70 },
    ]);
  }

  addItem() {
    const item = { name: 'New', age: 50 };
    this.allItemsList.push(item);
    this.allItemsSub$.next(this.allItemsList);
  }
}
