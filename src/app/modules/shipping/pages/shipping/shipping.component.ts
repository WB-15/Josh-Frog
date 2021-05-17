import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import {
  faSearch,
  faBalanceScale,
  faRuler,
  faRulerVertical,
  faRulerHorizontal
} from '@fortawesome/pro-duotone-svg-icons';

import { DialogService } from '../../../shared/services/dialog.service';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { WeightComponent } from '../../dialogs/weight/weight.component';
import { LengthComponent } from '../../dialogs/length/length.component';

import { BarcodeService } from '../../../shared/services/barcode.service';
import { ScaleService } from '../../../shared/services/scale.service';
import { PrinterService } from '../../../shared/services/printer.service';

import { WarehouseService } from '../../../shared/services/warehouse.service';

import {
  Carrier,
  Service,
  ShipmentEntity,
  ShipmentFindGQL,
  ShipmentInfoGQL,
  ShipmentShipGQL,
  WarehouseEntity,
  ShipmentFilterGQL,
  GraphQlPageableInput,
  ShipmentSearchGQL
} from '../../../../../generated/graphql';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: []
})
export class ShippingComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  faBalanceScale = faBalanceScale;
  faRuler = faRuler;
  faRulerVertical = faRulerVertical;
  faRulerHorizontal = faRulerHorizontal;

  searchShipmentNumber = '';
  pendingSearchShipmentNumber: string = null;

  carrier: Carrier;
  service: Service;

  shipmentNumber = '';
  weight: number;
  length: number;
  width: number;
  height: number;

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  loading = 0;
  shipmentScannedSubscription: Subscription;

  scaleDataSubscription: Subscription;

  shipment: ShipmentEntity;
  searchResults: ShipmentEntity[];

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private barcodeService: BarcodeService,
    private scaleService: ScaleService,
    private printerService: PrinterService,
    private shipmentInfoGQL: ShipmentInfoGQL,
    private shipmentFindGQL: ShipmentFindGQL,
    private shipmentFilterGQL: ShipmentFilterGQL,
    private shipmentSearchGQL: ShipmentSearchGQL,
    private shipmentShipGQL: ShipmentShipGQL
  ) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;
        this.route.queryParams.subscribe((params) => {
          if (params.id) {
            this.load(params.id);
          }
        });
      },
      (error) => {
        this.warehouse = null;
      }
    );

    this.shipmentScannedSubscription = this.barcodeService.shipmentScanned$.subscribe(
      (shipmentNumber) => {
        this.shipmentNumber = shipmentNumber;
        if (this.shipmentNumber) {
          this.loading++;
          this.changeDetectorRef.detectChanges();
          this.shipmentFindGQL
            .fetch({ shipmentNumber: this.shipmentNumber })
            .pipe(map((result) => result.data.shipmentFind))
            .subscribe(
              (result) => {
                this.shipment = result as ShipmentEntity;
                this.carrier = this.shipment.carrier;
                this.service = this.shipment.service;
                this.loading--;
                this.changeDetectorRef.detectChanges();
              },
              (error) => {
                // console.error(error);
                this.loading--;
                // this.dialogService.showErrorMessageBox(error);
                this.changeDetectorRef.detectChanges();

                // Couldn't find it by shipment number, fall back to search.
                this.searchShipmentNumber = this.shipmentNumber;
                this.search();
              }
            );
        }
      }
    );

    this.scaleDataSubscription = this.scaleService.scaleData$.subscribe(
      (scaleData) => {
        if (scaleData) {
          this.weight = scaleData.weight;
        }
      }
    );
  }

  search() {
    if (this.pendingSearchShipmentNumber == null) {
      if (this.searchShipmentNumber === '') {
        this.searchResults = [];
      } else {
        this.pendingSearchShipmentNumber = this.searchShipmentNumber;

        const pageable: GraphQlPageableInput = {
          page: 1,
          pageSize: 5
        };
        this.shipmentSearchGQL
          .fetch({
            query: this.searchShipmentNumber
          })
          .pipe(map((result) => result.data.shipmentSearch))
          .subscribe(
            (result) => {
              this.searchResults = result as ShipmentEntity[];
              this.changeDetectorRef.detectChanges();
              if (
                this.pendingSearchShipmentNumber !== this.searchShipmentNumber
              ) {
                this.pendingSearchShipmentNumber = null;
                this.search();
              } else {
                this.pendingSearchShipmentNumber = null;
              }
            },
            (error) => {
              console.error(error);
              this.dialogService.showErrorMessageBox(error);
              this.changeDetectorRef.detectChanges();
              if (
                this.pendingSearchShipmentNumber !== this.searchShipmentNumber
              ) {
                this.pendingSearchShipmentNumber = null;
                this.search();
              } else {
                this.pendingSearchShipmentNumber = null;
              }
            }
          );
      }
    }
  }

  load(id: string) {
    this.loading++;
    this.searchShipmentNumber = '';
    this.searchResults = [];
    this.changeDetectorRef.detectChanges();
    this.shipmentInfoGQL
      .fetch({ id })
      .pipe(map((result) => result.data.shipmentInfo))
      .subscribe(
        (result) => {
          this.shipment = result as ShipmentEntity;
          this.carrier = this.shipment.carrier;
          this.service = this.shipment.service;
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

  showLengthDialog() {
    const options = new DialogBoxOptions();
    options.component = LengthComponent;
    options.inputs = {
      callback: (length: number) => {
        this.length = length;
      }
    };
    options.title = 'Package Length';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  showWidthDialog() {
    const options = new DialogBoxOptions();
    options.component = LengthComponent;
    options.inputs = {
      callback: (width: number) => {
        this.width = width;
      }
    };
    options.title = 'Package Width';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  showHeightDialog() {
    const options = new DialogBoxOptions();
    options.component = LengthComponent;
    options.inputs = {
      callback: (height: number) => {
        this.height = height;
      }
    };
    options.title = 'Package Height';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  showWeightDialog() {
    const options = new DialogBoxOptions();
    options.component = WeightComponent;
    options.inputs = {
      callback: (weight: number) => {
        this.weight = weight;
      }
    };
    options.title = 'Package Weight';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  ship(): void {
    this.shipmentShipGQL
      .mutate({
        id: this.shipment.id,
        carrier: this.carrier,
        service: this.service,
        warehouse: this.warehouse.name,
        weight: this.weight ? this.weight : this.shipment.estimatedWeight,
        length: this.length ? this.length : this.shipment.estimatedLength,
        width: this.width ? this.width : this.shipment.estimatedWidth,
        height: this.height ? this.height : this.shipment.estimatedHeight
      })
      .pipe(map((result) => result.data.shipmentShip))
      .subscribe(
        (result) => {
          this.shipment = result as ShipmentEntity;
          this.printerService.printShippingLabel(
            this.shipment.shipmentNumber,
            this.shipment.zplContent
          );
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.shipmentScannedSubscription.unsubscribe();
    this.scaleDataSubscription.unsubscribe();
  }
}
