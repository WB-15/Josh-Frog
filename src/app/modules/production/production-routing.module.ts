import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './pages/production/production.component';

const routes: Routes = [
  {
    path: '',
    component: ProductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule {}
