import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreppingComponent } from './pages/prepping.component';
import { GlobalSharedModule } from '../shared/global-shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PreppingComponent }
];

@NgModule({
  declarations: [PreppingComponent],
  imports: [RouterModule.forChild(routes), GlobalSharedModule, CommonModule, FormsModule]
})
export class PreppingModule {}
