import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(
    private host: ElementRef,
    private platform: Platform
  ) {}

  ngAfterViewInit() {
    if (this.platform.is('desktop') || this.platform.is('electron')) {
      this.host.nativeElement.focus();
    }
  }
}
