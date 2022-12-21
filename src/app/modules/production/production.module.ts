import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './pages/production/production.component';
import { StatsComponent } from './dialogs/stats/stats.component';

@NgModule({
  declarations: [ProductionComponent, StatsComponent],
  imports: [CommonModule, FormsModule, GlobalSharedModule, ProductionRoutingModule]
})
export class ProductionModule {}
