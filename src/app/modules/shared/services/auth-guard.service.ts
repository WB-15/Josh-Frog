import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['/account/login']);
      return false;
    }
    return true;
  }
}
