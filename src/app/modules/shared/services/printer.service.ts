import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { CapacitorBrotherPrinter, CapacitorZebraPrinter } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  constructor(private platform: Platform) {}

  printProductLabel(sku: string, name: string, price: number, quantity: number) {
    if (this.platform.is('capacitor')) {
      CapacitorBrotherPrinter.printLabel({ sku, name, price, quantity });
    }
  }

  printShippingLabel(jobName: string, zplContent: string) {
    if (this.platform.is('electron')) {
      CapacitorZebraPrinter.printBase64Label({ jobName, zplContent });
    }
  }
}
