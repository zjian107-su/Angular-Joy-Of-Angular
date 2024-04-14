import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { LogService } from '../services/log.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: LogService) {}

  canActivate(): any {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      console.log('Not authorized');
      alert(
        'You are not authorized to view this page, please log in with Daniel'
      );
      return false;
    }
  }
}
