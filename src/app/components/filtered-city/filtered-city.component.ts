import { Component, OnInit } from '@angular/core';
import cityList from './data';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-filtered-city',
  templateUrl: './filtered-city.component.html',
  styleUrl: './filtered-city.component.css',
})
export class FilteredCityComponent {
  cityList: string[] = [];
  filteredList: string[] = [];
  filterString: string = '';
  filterClickSubject: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.cityList = cityList;
    this.filteredList = cityList;

    // set up debounce to prevent server request abuse
    this.filterClickSubject.pipe(debounceTime(1000)).subscribe({
      next: () => {
        this.filter();
      },
    });
  }

  onChange(model: string) {
    this.filterClickSubject.next(model);
  }

  filter(): void {
    this.filteredList = this.cityList.filter((city) =>
      city.toLowerCase().includes(this.filterString.toLowerCase())
    );
  }
}
