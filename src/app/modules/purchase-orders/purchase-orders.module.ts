import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GlobalSharedModule } from '../shared/global-shared.module';
import { PurchaseOrdersComponent } from './pages/purchase-orders.component';

const routes: Routes = [
  { path: '', component: PurchaseOrdersComponent }
];

@NgModule({
  declarations: [PurchaseOrdersComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, GlobalSharedModule, FontAwesomeModule]
})
export class PurchaseOrdersModule {}
