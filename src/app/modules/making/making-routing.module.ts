import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakingComponent } from './pages/making/making.component';

const routes: Routes = [
  {
    path: '',
    component: MakingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakingRoutingModule {}
