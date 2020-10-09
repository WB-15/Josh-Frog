import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const { CapacitorSocketMobile } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  private barcodeScanners: BarcodeScannerEvent[] = [];
  private barcodeScannersSubject$ = new BehaviorSubject<BarcodeScannerEvent[]>(
    this.barcodeScanners
  );
  public barcodeScannersChanged$ = this.barcodeScannersSubject$.asObservable();

  private lastBarcodeDataEvent: BarcodeDataEvent;
  private barcodeDataSubject$ = new BehaviorSubject<BarcodeDataEvent>(
    this.lastBarcodeDataEvent
  );
  public barcodeDataChanged$ = this.barcodeDataSubject$.asObservable();

  private lastUpcEvent: string;
  private upcDataSubject$ = new BehaviorSubject<string>(this.lastUpcEvent);
  public upcScanned$ = this.upcDataSubject$.asObservable();

  private lastSkuEvent: string;
  private skuDataSubject$ = new BehaviorSubject<string>(this.lastSkuEvent);
  public skuScanned$ = this.skuDataSubject$.asObservable();

  private lastBinEvent: string;
  private binDataSubject$ = new BehaviorSubject<string>(this.lastBinEvent);
  public binScanned$ = this.binDataSubject$.asObservable();

  private lastOrderEvent: string;
  private orderDataSubject$ = new BehaviorSubject<string>(this.lastOrderEvent);
  public orderScanned$ = this.orderDataSubject$.asObservable();

  constructor(private platform: Platform) {
    if (platform.is('capacitor')) {
      CapacitorSocketMobile.addListener(
        'barcodeDataEvent',
        (barcodeDataEvent: BarcodeDataEvent) => {
          this.barcodeDataSubject$.next(barcodeDataEvent);

          if (barcodeDataEvent.type === 'UPC A') {
            this.orderDataSubject$.next(null);
            this.binDataSubject$.next(null);
            this.skuDataSubject$.next(null);
            this.upcDataSubject$.next(barcodeDataEvent.data);
          } else if (barcodeDataEvent.type === 'Code 128') {
            if (barcodeDataEvent.data.charAt(0) === '#') {
              this.orderDataSubject$.next(null);
              this.skuDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.binDataSubject$.next(barcodeDataEvent.data.substr(1));
            } else if (barcodeDataEvent.data.charAt(0) === '*') {
              this.orderDataSubject$.next(null);
              this.binDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.skuDataSubject$.next(barcodeDataEvent.data.substr(1));
            } else {
              this.binDataSubject$.next(null);
              this.skuDataSubject$.next(null);
              this.upcDataSubject$.next(null);
              this.orderDataSubject$.next(barcodeDataEvent.data);
            }
          }
        }
      );

      CapacitorSocketMobile.addListener(
        'deviceConnectionEvent',
        (barcodeScannerEvent: BarcodeScannerEvent) => {
          console.log(
            'deviceConnectionEvent',
            JSON.stringify(barcodeScannerEvent)
          );
          let found = false;
          for (const device of this.barcodeScanners) {
            if (device.serial === barcodeScannerEvent.serial) {
              found = true;
            }
          }
          if (!found) {
            this.barcodeScanners = this.barcodeScanners.concat(
              barcodeScannerEvent
            );
          }
          this.barcodeScannersSubject$.next(this.barcodeScanners);
        }
      );

      CapacitorSocketMobile.addListener(
        'deviceDisconnectionEvent',
        (barcodeScannerEvent: BarcodeScannerEvent) => {
          console.log(
            'deviceDisconnectionEvent',
            JSON.stringify(barcodeScannerEvent)
          );

          for (let i = 0; i < this.barcodeScanners.length; ++i) {
            if (this.barcodeScanners[i].serial === barcodeScannerEvent.serial) {
              this.barcodeScanners.splice(i, 1);
            }
          }
          this.barcodeScannersSubject$.next(this.barcodeScanners);
        }
      );
      CapacitorSocketMobile.start();
    }
  }
}

export class BarcodeDataEvent {
  public type: string;
  public data: string;
}

export class BarcodeScannerEvent {
  public name: string;
  public serial: string;
}
