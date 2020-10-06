import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';


@NgModule({
  declarations: [AccountComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ]
})
export class AccountModule { }
