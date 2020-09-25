import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantLabelsComponent } from './pages/plant-labels/plant-labels.component';

const routes: Routes = [
  {
    path: '',
    component: PlantLabelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantLabelsRoutingModule { }
