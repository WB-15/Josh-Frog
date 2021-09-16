import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { GlobalSharedModule } from '../shared/global-shared.module';
import { ChangeBinComponent } from './dialogs/change-bin/change-bin.component';

@NgModule({
  declarations: [InventoryComponent, ChangeBinComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalSharedModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule {}
