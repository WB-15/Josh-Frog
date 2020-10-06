import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserEntity } from '../../../generated/graphql';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: []
})
export class AccountComponent implements OnInit, OnDestroy {
  user: UserEntity;
  userChangedSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userChangedSubscription = this.userService.userChanged$.subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.userChangedSubscription.unsubscribe();
  }
}
