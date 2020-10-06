import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
      private userService: UserService,
      private router: Router) { }

  ngOnInit() {}

  login() {
    // TODO: subscribe to get success/failure
    this.userService.login(this.email, this.password).subscribe(
        (response) => {
          this.router.navigate(['']);
        },
        (error) => {
          console.error(error);
        }
    );
    // TODO: redirect
  }
}
