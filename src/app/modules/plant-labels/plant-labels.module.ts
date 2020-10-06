import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GlobalSharedModule } from '../shared/global-shared.module';
import { PlantLabelsRoutingModule } from './plant-labels-routing.module';
import { PlantLabelsComponent } from './pages/plant-labels/plant-labels.component';

@NgModule({
  declarations: [PlantLabelsComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalSharedModule,
    PlantLabelsRoutingModule
  ]
})
export class PlantLabelsModule {}
