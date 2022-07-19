import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { ProductLabelsComponent } from './pages/product-labels/product-labels.component';
import { ProductLabelsRoutingModule } from './product-labels-routing.module';


@NgModule({
  declarations: [ProductLabelsComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalSharedModule,
    ProductLabelsRoutingModule
  ]
})
export class ProductLabelsModule {}
