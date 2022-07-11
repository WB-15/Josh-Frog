import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../../../shared/services/dialog.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.error = params.message;
    });
  }

  login() {
    this.error = null;
    this.userService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate(['']);
      },
      (error) => {
        this.error = error.message ? error.message : JSON.stringify(error);
      }
    );
  }
}
