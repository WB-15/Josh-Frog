import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseOrdersComponent } from './pages/purchase-orders.component';
import { GlobalSharedModule } from '../shared/global-shared.module';

const routes: Routes = [
  { path: '', component: PurchaseOrdersComponent }
];

@NgModule({
  declarations: [PurchaseOrdersComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, GlobalSharedModule]
})
export class PurchaseOrdersModule {}
