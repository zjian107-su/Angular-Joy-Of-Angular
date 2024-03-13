import { Component, Input } from '@angular/core';
import { Tab } from '../../interfaces/tab';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() data: Tab = {} as Tab;
}
