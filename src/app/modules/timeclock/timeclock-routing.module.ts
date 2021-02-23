import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeclockComponent } from './pages/timeclock/timeclock.component';

const routes: Routes = [
  {
    path: '',
    component: TimeclockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeclockRoutingModule {}
