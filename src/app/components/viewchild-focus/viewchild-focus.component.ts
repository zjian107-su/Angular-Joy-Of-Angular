import { Component, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from './components/viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-focus',
  templateUrl: './viewchild-focus.component.html',
  styleUrl: './viewchild-focus.component.css',
})
export class ViewchildFocusComponent {
  @ViewChild(ViewChildChildComponent) childComponent!: ViewChildChildComponent;

  focusOnChildInput() {
    this.childComponent.focusInput();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.childComponent.focusInput();
    });
  }
}
