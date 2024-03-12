import { Component } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrl: './swap.component.css',
})
export class SwapComponent {
  data = [
    { id: 0, text: 'A' },
    { id: 1, text: 'B' },
    { id: 2, text: 'C' },
  ];
  tempData = [...this.data];

  swap(index: number): void {
    [this.tempData[1], this.tempData[index]] = [
      this.tempData[index],
      this.tempData[1],
    ];
  }
}
