import { Component, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrl: './viewchild-child.component.css',
})
export class ViewChildChildComponent {
  formControl = this.fb.control('');
  text: string = 'Value recording here...';

  constructor(private fb: FormBuilder) {}

  @ViewChild('textInput') inputElement!: ElementRef;

  onSubmit(): void {
    this.text = this.formControl.value || '';
  }

  focusInput(): void {
    this.inputElement.nativeElement.focus();
  }
}
