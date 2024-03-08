import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() handleSearch = new EventEmitter<string>();
  query: string = '';

  handleChange(): void {
    this.handleSearch.emit(this.query);
  }
}
