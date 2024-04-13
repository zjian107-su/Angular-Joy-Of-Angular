import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { firstLetterCapitalized } from './checkCapitalized';

@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrl: './regi-form.component.css',
})
export class RegiFormComponent implements OnInit {
  regiForm: FormGroup = this.fb.group({
    id: ['11', [Validators.required]],
    name: ['daniel', [Validators.required, firstLetterCapitalized]],
    address: this.fb.group({
      street: ['2600 God Street', []],
      city: ['NYC', []],
      geo: this.fb.group({
        lat: ['222.222', []],
        lng: ['11.11', []],
      }),
    }),
    phone: ['111-111-1111', []],
    website: ['www.daniel.com', []],
  });

  constructor(public us: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.us.getUsers();
    console.log(this.regiForm);
    this.regiForm.valueChanges.subscribe({
      next: (data) => console.log('form changed:', data),
    });
  }

  logFormValue() {
    this.us.addUser(this.regiForm.value);
    console.log(this.regiForm.value);
    this.regiForm.reset();
  }
}
