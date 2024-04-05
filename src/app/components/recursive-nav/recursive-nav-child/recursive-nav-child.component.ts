import { Component, Input } from '@angular/core';
import { Nav } from '../data';

@Component({
  selector: 'app-recursive-nav-child',
  templateUrl: './recursive-nav-child.component.html',
  styleUrl: './recursive-nav-child.component.css',
})
export class RecursiveNavChildComponent {
  @Input() data: Nav[] = [];

  // cleverly use expand even though it's not in the data model
  toggleExpand(item: Nav): void {
    item.expanded = !item.expanded;
  }
}
