import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: []
})
export class LoadingComponent {
  isBrowser = isPlatformBrowser(this.platformId);
  faSpinnerThird = faSpinnerThird;
  @Input() message = 'Please wait...';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
}

