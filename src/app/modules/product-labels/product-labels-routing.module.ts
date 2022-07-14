import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLabelsComponent } from './pages/product-labels/product-labels.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLabelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductLabelsRoutingModule { }
