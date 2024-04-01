import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  registerForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      verifyPassword: ['', Validators.required],
    });
  }

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;

    if (
      this.registerForm.invalid ||
      this.registerForm.controls['password'].value !==
        this.registerForm.controls['verifyPassword'].value
    ) {
      return;
    }

    alert(
      `User: ${this.registerForm.controls['userName'].value}\nEmail: ${this.registerForm.controls['email'].value}`
    );
  }
}
