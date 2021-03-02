import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoprintRoutingModule } from './autoprint-routing.module';
import { AutoprintComponent } from './pages/autoprint/autoprint.component';
import { GlobalSharedModule } from '../shared/global-shared.module';


@NgModule({
  declarations: [AutoprintComponent],
  imports: [
    CommonModule,
    AutoprintRoutingModule,
    GlobalSharedModule
  ]
})
export class AutoprintModule { }
