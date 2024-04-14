import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { firstCharCapValidator } from './firstLetterCap';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-interceptor-form',
  templateUrl: './interceptor-form.component.html',
  styleUrl: './interceptor-form.component.css',
})
export class InterceptorFormComponent {
  signForm: FormGroup = this.bf.group({
    name: ['daniel', [Validators.required, firstCharCapValidator()]],
    password: ['123456', [Validators.required]],
  });

  constructor(public bf: FormBuilder, public logService: LogService) {}

  get nameControl() {
    console.log(this.signForm.get('name'));
    return this.signForm.get('name');
  }

  clear() {
    this.logService.clearCookie();
  }
}
