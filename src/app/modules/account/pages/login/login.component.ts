import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error = false;

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.error = false;
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate(['']);
      },
      (error) => {
        console.error(error);
        this.dialogService.showErrorMessageBox(error);
      }
    );
  }
}
