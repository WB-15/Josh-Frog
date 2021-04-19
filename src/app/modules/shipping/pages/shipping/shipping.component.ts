import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ScaleService } from '../../../shared/services/scale.service';
import { PrinterService } from '../../../shared/services/printer.service';
import {
  ShipmentEntity,
  ShipmentInfoGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { Subscription } from 'rxjs';
import { WarehouseService } from '../../../shared/services/warehouse.service';
import { BarcodeService } from '../../../shared/services/barcode.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: []
})
export class ShippingComponent implements OnInit, OnDestroy {
  shipmentNumber = '';

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  loading = 0;
  shipmentScannedSubscription: Subscription;

  shipment: ShipmentEntity;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private barcodeService: BarcodeService,
    private scaleService: ScaleService,
    private printerService: PrinterService,
    private shipmentInfoGQL: ShipmentInfoGQL
  ) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;
      }
    );

    this.shipmentScannedSubscription = this.barcodeService.shipmentScanned$.subscribe(
      (shipmentNumber) => {
        this.shipmentNumber = shipmentNumber;
        if (this.shipmentNumber) {
          this.loading++;
          this.changeDetectorRef.detectChanges();
          this.shipmentInfoGQL
            .fetch({ shipmentNumber: this.shipmentNumber })
            .pipe(map((result) => result.data.shipmentInfo))
            .subscribe(
              (result) => {
                this.shipment = result as ShipmentEntity;
                this.loading--;
                this.changeDetectorRef.detectChanges();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.dialogService.showErrorMessageBox(error);
                this.changeDetectorRef.detectChanges();
              }
            );
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.shipmentScannedSubscription.unsubscribe();
  }
}
