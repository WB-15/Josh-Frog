import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './modules/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'catalog',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/catalog/catalog.module').then((m) => m.CatalogModule)
  },
  {
    path: 'making',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/making/making.module').then((m) => m.MakingModule)
  },
  {
    path: 'receiving',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/receiving/receiving.module').then(
        (m) => m.ReceivingModule
      )
  },
  {
    path: 'inventory',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/inventory/inventory.module').then(
        (m) => m.InventoryModule
      )
  },
  {
    path: 'shipping',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/shipping/shipping.module').then((m) => m.ShippingModule)
  },
  {
    path: 'plant_labels',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/plant-labels/plant-labels.module').then(
        (m) => m.PlantLabelsModule
      )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
