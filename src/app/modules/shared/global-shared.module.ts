import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrierIconComponent } from './components/carrier-icon/carrier-icon.component';

import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MarketplaceIconComponent } from './components/marketplace-icon/marketplace-icon.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { PackagingIconComponent } from './components/packaging-icon/packaging-icon.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { ShipmentContentsComponent } from './components/shipment-contents/shipment-contents.component';
import { ShipmentStatusComponent } from './components/shipment-status/shipment-status.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ThumbnailLgComponent } from './components/thumbnail-lg/thumbnail-lg.component';
import { ThumbnailMdComponent } from './components/thumbnail-md/thumbnail-md.component';
import { ThumbnailSmComponent } from './components/thumbnail-sm/thumbnail-sm.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { CarrierPipe } from './pipes/carrier.pipe';
import { ConfidencePipe } from './pipes/confidence.pipe';
import { HostnamePipe } from './pipes/hostname.pipe';
import { OptionPipe } from './pipes/option.pipe';
import { PackagingPipe } from './pipes/packaging.pipe';
import { PurchaseOrderStatusPipe } from './pipes/purchase-order-status.pipe';
import { ServicePipe } from './pipes/service.pipe';
import { ShipmentStatusPipe } from './pipes/shipment-status.pipe';
import { ShippingNeedsPipe } from './pipes/shipping-needs.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { WarehousePipe } from './pipes/warehouse.pipe';

@NgModule({
  declarations: [
    DialogComponent,
    MessageBoxComponent,
    PaginationComponent,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent,
    MarketplaceIconComponent,
    ShipmentStatusComponent,
    ShipmentContentsComponent,
    ShippingAddressComponent,
    OrderStatusComponent,
    CarrierIconComponent,
    PackagingIconComponent,
    HostnamePipe,
    ShippingNeedsPipe,
    SqrtPipe,
    ConfidencePipe,
    ServicePipe,
    CarrierPipe,
    OptionPipe,
    PackagingPipe,
    AutofocusDirective,
    ShipmentStatusPipe,
    LoadingComponent,
    ProductSearchComponent,
    PurchaseOrderStatusPipe,
    WarehousePipe,
    PurchaseOrderComponent,
    TabsComponent
  ],
  exports: [
    DialogComponent,
    MessageBoxComponent,
    PaginationComponent,
    FontAwesomeModule,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent,
    MarketplaceIconComponent,
    ShipmentStatusComponent,
    ShipmentContentsComponent,
    ShippingAddressComponent,
    OrderStatusComponent,
    CarrierIconComponent,
    PackagingIconComponent,
    HostnamePipe,
    ShippingNeedsPipe,
    SqrtPipe,
    ConfidencePipe,
    ServicePipe,
    CarrierPipe,
    OptionPipe,
    PackagingPipe,
    AutofocusDirective,
    LoadingComponent,
    ProductSearchComponent,
    PurchaseOrderStatusPipe,
    WarehousePipe,
    TabsComponent
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule]
})
export class GlobalSharedModule {}
