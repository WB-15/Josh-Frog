import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { MakingRoutingModule } from './making-routing.module';
import { MakingComponent } from './pages/making/making.component';
import { StatsComponent } from './dialogs/stats/stats.component';

@NgModule({
  declarations: [MakingComponent, StatsComponent],
  imports: [CommonModule, FormsModule, GlobalSharedModule, MakingRoutingModule]
})
export class MakingModule {}
