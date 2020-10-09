import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { CapacitorBrotherPrinter } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  constructor(private platform: Platform) {}

  printLabel(sku: string, name: string, price: number, quantity: number) {
    if (this.platform.is('capacitor')) {
      CapacitorBrotherPrinter.printLabel({ sku, name, price, quantity });
    }
  }
}
