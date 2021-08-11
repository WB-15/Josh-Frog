import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import {
  faSearch,
  faPencil,
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
  ShipmentSearchGQL,
  Packaging,
  ShipmentValidateAddressGQL,
  ShipmentVoidGQL
} from '../../../../../generated/graphql';
import { MethodComponent } from '../../dialogs/method/method.component';
import { PackagingComponent } from '../../dialogs/packaging/packaging.component';
import { MessageBoxOptions } from '../../../shared/components/message-box/message-box.component';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: []
})
export class ShippingComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  faPencil = faPencil;
  faBalanceScale = faBalanceScale;
  faRuler = faRuler;
  faRulerVertical = faRulerVertical;
  faRulerHorizontal = faRulerHorizontal;

  searchShipmentNumber = '';
  pendingSearchShipmentNumber: string = null;

  carrier: Carrier;
  service: Service;
  packaging: Packaging;
  options: string[];

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
    private shipmentValidateAddressGQL: ShipmentValidateAddressGQL,
    private shipmentShipGQL: ShipmentShipGQL,
    private shipmentVoidGQL: ShipmentVoidGQL
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
                if (result) {
                  this.weight = null;
                  this.length = null;
                  this.width = null;
                  this.height = null;
                  this.packaging = null;
                  this.options = null;
                  this.shipment = result as ShipmentEntity;
                  this.carrier = this.shipment.carrier;
                  this.service = this.shipment.service;
                  if (this.shipment.packaging) {
                    this.packaging = this.shipment.packaging;
                  } else {
                    this.packaging = Packaging.CardboardBox;
                  }
                  this.options = this.shipment.options;
                  this.loading--;
                  this.changeDetectorRef.detectChanges();
                } else {
                  // Couldn't find it by shipment number, fall back to search.
                  this.searchShipmentNumber = this.shipmentNumber;
                  this.search();
                  this.changeDetectorRef.detectChanges();
                }
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

    this.scaleDataSubscription = this.scaleService.scaleData$.subscribe(
      (scaleData) => {
        if (scaleData) {
          this.weight =
            Math.round((scaleData.weight + Number.EPSILON) * 100) / 100;
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
              this.shipment = null;
              this.weight = null;
              this.length = null;
              this.width = null;
              this.height = null;
              this.packaging = null;
              this.options = null;
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
          if (this.shipment.packaging) {
            this.packaging = this.shipment.packaging;
          } else {
            this.packaging = Packaging.CardboardBox;
          }
          this.options = this.shipment.options;
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

  verifyAddress() {
    this.shipmentValidateAddressGQL
      .mutate({ id: this.shipment.id })
      .pipe(map((result) => result.data.shipmentValidateAddress))
      .subscribe(
        (result) => {
          this.shipment = result as ShipmentEntity;
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
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

  showMethodDialog() {
    const opts = new DialogBoxOptions();
    opts.component = MethodComponent;
    opts.inputs = {
      shipment: this.shipment,
      warehouse: this.warehouse,
      packaging: this.packaging,
      length: this.length,
      width: this.width,
      height: this.height,
      weight: this.weight,
      callback: (
        carrier: Carrier,
        service: Service,
        packaging: Packaging,
        options: string[]
      ) => {
        this.carrier = carrier;
        this.service = service;
        this.packaging = packaging;
        this.options = options;
      }
    };
    opts.title = 'Shipping Method';
    opts.okText = 'Close';
    this.dialogService.showDialog(opts);
  }

  showPackagingDialog() {
    const options = new DialogBoxOptions();
    options.component = PackagingComponent;
    options.inputs = {
      callback: (packaging: Packaging) => {
        this.packaging = packaging;
      }
    };
    options.title = 'Packaging Type';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  shipShipment(): void {
    if (this.options == null) {
      this.options = [];
    }
    this.shipmentShipGQL
      .mutate({
        id: this.shipment.id,
        carrier: this.carrier,
        service: this.service,
        packaging: this.packaging,
        options: this.options,
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
          this.weight = null;
          this.length = null;
          this.width = null;
          this.height = null;
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  reprintLabel(): void {
    this.printerService.printShippingLabel(
      this.shipment.shipmentNumber,
      this.shipment.zplContent
    );
  }

  voidShipment(): void {
    const messageBoxOptions = new MessageBoxOptions();
    messageBoxOptions.title = 'Void Shipment';
    messageBoxOptions.message = 'Are you sure you want to void this shipment?';
    messageBoxOptions.okText = 'Void';
    this.dialogService.showMessageBox(messageBoxOptions, () => {
      this.shipmentVoidGQL
        .mutate({
          id: this.shipment.id
        })
        .pipe(map((result) => result.data.shipmentVoid))
        .subscribe(
          (result) => {
            this.shipment = result as ShipmentEntity;
          },
          (error) => {
            this.dialogService.showErrorMessageBox(error);
          }
        );
    });
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.shipmentScannedSubscription.unsubscribe();
    this.scaleDataSubscription.unsubscribe();
  }
}
