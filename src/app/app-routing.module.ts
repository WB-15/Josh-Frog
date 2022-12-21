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
    path: 'production',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/production/production.module').then((m) => m.ProductionModule)
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
    path: 'weather',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/weather/weather.module').then((m) => m.WeatherModule)
  },
  {
    path: 'auto_print',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/autoprint/autoprint.module').then(
        (m) => m.AutoprintModule
      )
  },
  {
    path: 'product_labels',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/product-labels/product-labels.module').then(
        (m) => m.ProductLabelsModule
      )
  },
  {
    path: 'prepping',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/prepping/prepping.module').then(
        (m) => m.PreppingModule
      )
  },
  {
    path: 'purchase-orders',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/purchase-orders/purchase-orders.module').then(
        (m) => m.PurchaseOrdersModule
      )
  },
  {
    path: 'time_clock',
    canActivate: [],
    loadChildren: () =>
      import('./modules/timeclock/timeclock.module').then(
        (m) => m.TimeclockModule
      )
  },
  {
    path: 'settings',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule)
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
