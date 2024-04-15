import { SubjectThemeService } from './subject-theme.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject-theme.component.html',
  styleUrl: './subject-theme.component.css',
})
export class SubjectThemeComponent {
  constructor(public sts: SubjectThemeService) {}
}
