import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    if (!this.userService.isAuthenticated()) {
      this.userService.logout(true);
      return false;
    }
    return true;
  }
}
