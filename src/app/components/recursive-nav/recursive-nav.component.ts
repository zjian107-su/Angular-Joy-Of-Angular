import { Component, OnInit } from '@angular/core';
import fetchData, { Nav } from './data';

@Component({
  selector: 'app-recursive-nav',
  templateUrl: './recursive-nav.component.html',
  styleUrl: './recursive-nav.component.css',
})
export class RecursiveNavComponent implements OnInit {
  data: Nav[] = [];

  ngOnInit(): void {
    fetchData().then((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
