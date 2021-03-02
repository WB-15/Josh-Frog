import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoprintComponent } from './pages/autoprint/autoprint.component';

const routes: Routes = [
  {
    path: '',
    component: AutoprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoprintRoutingModule {}
