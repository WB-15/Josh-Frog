import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { WarehouseComponent } from './dialogs/warehouse/warehouse.component';

@NgModule({
  declarations: [WarehouseComponent],
  imports: [CommonModule, SettingsRoutingModule]
})
export class SettingsModule {}
