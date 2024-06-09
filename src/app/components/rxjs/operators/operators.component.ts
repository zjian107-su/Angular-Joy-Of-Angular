import { Component } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css',
})
export class OperatorsComponent {
  operatorType: string = '';

  switchCase(type: string) {
    this.operatorType = type;
  }
}
