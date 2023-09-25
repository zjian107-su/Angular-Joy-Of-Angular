import { Component, OnInit } from '@angular/core';
import cityList from './data';

@Component({
  selector: 'app-filtered-city',
  templateUrl: './filtered-city.component.html',
  styleUrl: './filtered-city.component.css',
})
export class FilteredCityComponent {
  cityList: string[] = [];
  filteredList: string[] = [];
  filterString: string = '';

  ngOnInit() {
    this.cityList = cityList;
    this.filteredList = cityList;
  }

  filter(): void {
    this.filteredList = this.cityList.filter((city) =>
      city.toLowerCase().includes(this.filterString.toLowerCase())
    );
  }
}
