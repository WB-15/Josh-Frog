import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { WeightComponent } from './dialogs/weight/weight.component';
import { LengthComponent } from './dialogs/length/length.component';
import { MethodComponent } from './dialogs/method/method.component';
import { PackagingComponent } from './dialogs/packaging/packaging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShippingComponent,
    WeightComponent,
    LengthComponent,
    MethodComponent,
    PackagingComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    GlobalSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShippingModule {}
