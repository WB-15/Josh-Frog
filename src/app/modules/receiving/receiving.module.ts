import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { ReceivingRoutingModule } from './receiving-routing.module';
import { ReceivingComponent } from './pages/receiving/receiving.component';

@NgModule({
  declarations: [ReceivingComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalSharedModule,
    ReceivingRoutingModule
  ]
})
export class ReceivingModule {}
