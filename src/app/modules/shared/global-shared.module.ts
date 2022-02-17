import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DialogComponent } from './components/dialog/dialog.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ThumbnailSmComponent } from './components/thumbnail-sm/thumbnail-sm.component';
import { ThumbnailMdComponent } from './components/thumbnail-md/thumbnail-md.component';
import { ThumbnailLgComponent } from './components/thumbnail-lg/thumbnail-lg.component';
import { MarketplaceIconComponent } from './components/marketplace-icon/marketplace-icon.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { ShipmentStatusComponent } from './components/shipment-status/shipment-status.component';
import { ShipmentContentsComponent } from './components/shipment-contents/shipment-contents.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { CarrierIconComponent } from './components/carrier-icon/carrier-icon.component';
import { PackagingIconComponent } from './components/packaging-icon/packaging-icon.component';
import { HostnamePipe } from './pipes/hostname.pipe';
import { ShippingNeedsPipe } from './pipes/shipping-needs.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { ConfidencePipe } from './pipes/confidence.pipe';
import { ServicePipe } from './pipes/service.pipe';
import { CarrierPipe } from './pipes/carrier.pipe';
import { OptionPipe } from './pipes/option.pipe';
import { PackagingPipe } from './pipes/packaging.pipe';
import { AutofocusDirective } from './directives/autofocus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipmentStatusPipe } from './pipes/shipment-status.pipe';
import { LoadingComponent } from './components/loading/loading.component';

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
    LoadingComponent
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
    LoadingComponent
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule]
})
export class GlobalSharedModule {}
