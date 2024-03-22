import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
  styleUrl: './uuid.component.css',
})
export class UuidComponent implements OnInit {
  uuid: string = ""

  ngOnInit(): void {
    this.uuid = uuidv4();
  }
}
