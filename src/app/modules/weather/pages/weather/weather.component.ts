import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { faSearch, faPencil } from '@fortawesome/pro-duotone-svg-icons';

import { DialogService } from '../../../shared/services/dialog.service';
import { BarcodeService } from '../../../shared/services/barcode.service';

import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { ShippingAddressComponent } from '../../../shared/components/shipping-address/shipping-address.component';
import { ShipmentContentsComponent } from '../../../shared/components/shipment-contents/shipment-contents.component';

import {
  GraphQlPageableInput,
  Packaging,
  ShipmentEntity,
  ShipmentFilterGQL,
  ShipmentFindGQL,
  ShipmentInfoGQL,
  ShipmentLookupWeatherGQL,
  ShipmentSearchGQL,
  ShipmentValidateAddressGQL,
  Weather
} from '../../../../../generated/graphql';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  faPencil = faPencil;

  searchShipmentNumber = '';
  pendingSearchShipmentNumber: string = null;

  shipmentNumber = '';

  loading = 0;
  shipmentScannedSubscription: Subscription;

  shipment: ShipmentEntity;
  searchResults: ShipmentEntity[] = [];
  shipmentEditable = false;
  shipmentSent = false;
  weathers: Weather[];

  private windowRef: Window;
  private searchDebounceTimer: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private barcodeService: BarcodeService,
    private shipmentInfoGQL: ShipmentInfoGQL,
    private shipmentFindGQL: ShipmentFindGQL,
    private shipmentFilterGQL: ShipmentFilterGQL,
    private shipmentSearchGQL: ShipmentSearchGQL,
    private shipmentValidateAddressGQL: ShipmentValidateAddressGQL,
    private shipmentLookupWeatherGQL: ShipmentLookupWeatherGQL
  ) {
    this.windowRef = this.document.defaultView;
  }

  ngOnInit() {
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
  }

  searchKey($event) {
    if (this.searchDebounceTimer) {
      this.windowRef.clearTimeout(this.searchDebounceTimer);
    }
    this.searchDebounceTimer = this.windowRef.setTimeout(() => {
      this.search($event);
    }, 20);
  }

  search($event?) {
    if (!$event || $event.key !== 'Enter') {
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
                this.weathers = null;
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
    } else if ($event && $event.key === 'Enter') {
      this.loadFirstShipment();
    }
  }

  load(id: string) {
    this.weathers = null;
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
          this.fetchWeather();
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
    this.shipment = Object.assign({}, shipment);
    this.shipment.packaging = this.shipment.packaging || Packaging.CardboardBox;
    this.setProgressBooleans();
    this.loading--;
    this.changeDetectorRef.detectChanges();
  }

  loadFirstShipment() {
    if (this.searchResults.length > 0) {
      this.load(this.searchResults[0].id);
    }
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

  setProgressBooleans() {
    this.shipmentEditable =
      this.shipment.shipmentStatus === 'NeedsScheduling' ||
      this.shipment.shipmentStatus === 'Unshipped' ||
      this.shipment.shipmentStatus === 'External';
    this.shipmentSent =
      this.shipment.shipmentStatus === 'Shipped' ||
      this.shipment.shipmentStatus === 'Delivered';
  }

  fetchWeather() {
    this.shipmentLookupWeatherGQL
      .mutate({ id: this.shipment.id })
      .pipe(map((result) => result.data.shipmentLookupWeather))
      .subscribe(
        (result) => {
          this.weathers = result as Weather[];
          console.log(this.weathers);
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.shipmentScannedSubscription.unsubscribe();
    if (this.searchDebounceTimer) {
      this.windowRef.clearTimeout(this.searchDebounceTimer);
    }
  }
}
