import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaginationComponent } from './components/pagination/pagination.component';
import { ThumbnailSmComponent } from './components/thumbnail-sm/thumbnail-sm.component';
import { ThumbnailMdComponent } from './components/thumbnail-md/thumbnail-md.component';
import { ThumbnailLgComponent } from './components/thumbnail-lg/thumbnail-lg.component';
import { HostnamePipe } from './pipes/hostname.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent,
    HostnamePipe
  ],
  exports: [
    PaginationComponent,
    FontAwesomeModule,
    ThumbnailSmComponent,
    ThumbnailMdComponent,
    ThumbnailLgComponent
  ],
  imports: [CommonModule, FontAwesomeModule]
})
export class GlobalSharedModule {}
