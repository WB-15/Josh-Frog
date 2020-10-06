import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [],
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.logout();
  }

}
