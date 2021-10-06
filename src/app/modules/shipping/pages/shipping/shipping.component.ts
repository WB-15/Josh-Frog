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
  faRulerHorizontal,
  faTimesCircle,
  faPlusCircle
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
  ShipmentShipMultiPieceGQL,
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
import { ShipmentContentsComponent } from '../../dialogs/shipment-contents/shipment-contents.component';
import { ShippingAddressComponent } from '../../dialogs/shipping-address/shipping-address.component';

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
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;

  searchShipmentNumber = '';
  pendingSearchShipmentNumber: string = null;

  carrier: Carrier;
  service: Service;
  packaging: Packaging;
  options: string[];

  shipmentNumber = '';
  packages: Package[] = [new Package()];
  activePackage = 0;

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  loading = 0;
  shipmentScannedSubscription: Subscription;

  scaleDataSubscription: Subscription;

  shipment: ShipmentEntity;
  searchResults: ShipmentEntity[];
  shipmentEditable = false;
  shipmentSent = false;

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
    private shipmentShipMultiPiece: ShipmentShipMultiPieceGQL,
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
                  this.packaging = null;
                  this.options = null;
                  this.shipmentLoaded(result as ShipmentEntity);
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
          this.packages[this.activePackage].weight =
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
              this.addPackage(true);
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
          this.shipmentLoaded(result as ShipmentEntity);
        },
        (error) => {
          console.error(error);
          this.loading--;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  shipmentLoaded(shipment: ShipmentEntity) {
    this.shipment = shipment;
    this.addPackage(true);
    this.carrier = this.shipment.carrier;
    this.service = this.shipment.service;
    this.packaging = this.shipment.packaging || Packaging.CardboardBox;
    this.options = this.shipment.options;
    this.setProgressBooleans();
    this.loading--;
    this.changeDetectorRef.detectChanges();
  }

  showEditAddressDialog() {
    if (this.shipmentEditable) {
      const options = new DialogBoxOptions();
      options.component = ShippingAddressComponent;
      options.inputs = {
        shipment: this.shipment,
        callback: (shipment: ShipmentEntity) => {
          this.shipment = shipment;
        }
      };
      options.title = 'Edit Shipping Address';
      options.okText = 'Cancel';
      this.dialogService.showDialog(options);
    }
  }

  showShipmentDialog() {
    const options = new DialogBoxOptions();
    options.component = ShipmentContentsComponent;
    options.inputs = { shipment: this.shipment };
    options.title = 'Shipment Items';
    this.dialogService.showDialog(options);
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
        this.packages[this.activePackage].length = length;
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
        this.packages[this.activePackage].width = width;
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
        this.packages[this.activePackage].height = height;
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
        this.packages[this.activePackage].weight = weight;
      }
    };
    options.title = 'Package Weight';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  showMethodDialog() {
    if (this.checkMethodRequirements()) {
      const opts = new DialogBoxOptions();
      opts.component = MethodComponent;
      opts.inputs = {
        shipment: this.shipment,
        warehouse: this.warehouse,
        packaging: this.packaging,
        packages: this.packages.length === 1 ? [this.getEstimatedPackage()] : this.packages,
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
  }

  showPackagingDialog() {
    if (this.packages.length === 1) {
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
  }

  shipShipment(): void {
    if (this.options == null) {
      this.options = [];
    }
    this.loading++;
    this.shipmentShipMultiPiece
      .mutate({
        id: this.shipment.id,
        carrier: this.carrier,
        service: this.service,
        packaging: this.packaging,
        options: this.options,
        warehouse: this.warehouse.name,
        packages: this.packages.length === 1 ? [this.getEstimatedPackage()] : this.packages
      })
      .pipe(map((result) => result.data.shipmentShipMultiPiece))
      .subscribe(
        (result) => {
          this.shipmentLoaded(result as ShipmentEntity);
          this.reprintLabel();
        },
        (error) => {
          this.loading--;
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  reprintLabel(): void {
    for (const zpl of this.shipment.zplContents) {
      this.printerService.printShippingLabel(
        this.shipment.shipmentNumber,
        zpl
      );
    }
  }

  voidShipment(): void {
    const messageBoxOptions = new MessageBoxOptions();
    messageBoxOptions.title = 'Void Shipment';
    messageBoxOptions.message = 'Are you sure you want to void this shipment?';
    messageBoxOptions.okText = 'Void';
    this.dialogService.showMessageBox(messageBoxOptions, () => {
      this.loading++;
      this.shipmentVoidGQL
        .mutate({
          id: this.shipment.id
        })
        .pipe(map((result) => result.data.shipmentVoid))
        .subscribe(
          (result) => {
            this.shipmentLoaded(result as ShipmentEntity);
          },
          (error) => {
            this.loading--;
            this.dialogService.showErrorMessageBox(error);
          }
        );
    });
  }

  checkMethodRequirements() {
    for (const pack of this.packages) {
      if (!pack.weight || !(pack.weight > 0)) {
        return this.packages.length === 1 && this.shipment.estimatedWeight > 0;
      }
    }
    return true;
  }

  checkShippingRequirements() {
    if (!this.carrier || !this.service || !this.packaging) {
      return false;
    }
    if (this.packaging === 'CARDBOARD_BOX') {
      const single = this.packages.length === 1;
      for (const pack of this.packages) {
        if
        (
          !(single && this.shipment.estimatedLength && this.shipment.estimatedLength > 0) && !(pack.length && pack.length > 0) ||
          !(single && this.shipment.estimatedWidth && this.shipment.estimatedWidth > 0) && !(pack.width && pack.width > 0) ||
          !(single && this.shipment.estimatedHeight && this.shipment.estimatedHeight > 0) && !(pack.height && pack.height > 0) ||
          !(single && this.shipment.estimatedWeight && this.shipment.estimatedWeight > 0) && !(pack.weight && pack.weight > 0)
        ) {
          return false;
        }
      }
    }
    return true;
  }

  addPackage(reset: boolean = false) {
    if (reset) {
      this.packages = [];
    }
    this.packages.push(new Package());
    this.activePackage = this.packages.length - 1;
    if (this.packages.length === 2) {
      this.packaging = Packaging.CardboardBox;
    }
  }

  removePackage(i: number) {
    if (this.packages.length > 1) {
      this.packages.splice(i, 1);
      if (this.activePackage > i || (this.activePackage === i && this.packages.length <= i)) {
        this.activePackage -= 1;
      }
    }
  }

  setActivePackage(i: number) {
    this.activePackage = i;
  }

  getEstimatedPackage() {
    if (this.packages.length === 1) {
      const pack = new Package();
      pack.length = this.packages[0].length || this.shipment.estimatedLength;
      pack.width = this.packages[0].width || this.shipment.estimatedWidth;
      pack.height = this.packages[0].height || this.shipment.estimatedHeight;
      pack.weight = this.packages[0].weight || this.shipment.estimatedWeight;
      return pack;
    }
  }

  setProgressBooleans() {
    this.shipmentEditable = this.shipment.shipmentStatus === 'NeedsScheduling' ||
      this.shipment.shipmentStatus === 'Unshipped' || this.shipment.shipmentStatus === 'External';
    this.shipmentSent = this.shipment.shipmentStatus === 'Shipped' || this.shipment.shipmentStatus === 'Delivered';
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.shipmentScannedSubscription.unsubscribe();
    this.scaleDataSubscription.unsubscribe();
  }
}

class Package {
  weight: number;
  length: number;
  width: number;
  height: number;
}
