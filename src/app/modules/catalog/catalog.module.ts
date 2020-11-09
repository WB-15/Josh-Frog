import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductInfoComponent } from './dialogs/product-info/product-info.component';

@NgModule({
  declarations: [CatalogComponent, ProductInfoComponent],
  imports: [CommonModule, FormsModule, GlobalSharedModule, CatalogRoutingModule]
})
export class CatalogModule {}
