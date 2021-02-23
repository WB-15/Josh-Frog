import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DialogComponent } from './components/dialog/dialog.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ThumbnailSmComponent } from './components/thumbnail-sm/thumbnail-sm.component';
import { ThumbnailMdComponent } from './components/thumbnail-md/thumbnail-md.component';
import { ThumbnailLgComponent } from './components/thumbnail-lg/thumbnail-lg.component';
import { HostnamePipe } from './pipes/hostname.pipe';
import { ShippingNeedsPipe } from './pipes/shipping-needs.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { ConfidencePipe } from './pipes/confidence.pipe';

@NgModule({
  declarations: [
    DialogComponent,
    MessageBoxComponent,
    PaginationComponent,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent,
    HostnamePipe,
    ShippingNeedsPipe,
    SqrtPipe,
    ConfidencePipe
  ],
  exports: [
    DialogComponent,
    MessageBoxComponent,
    PaginationComponent,
    FontAwesomeModule,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent,
    HostnamePipe,
    ShippingNeedsPipe,
    SqrtPipe,
    ConfidencePipe
  ],
  imports: [CommonModule, FontAwesomeModule]
})
export class GlobalSharedModule {}
