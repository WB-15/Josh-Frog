import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

import {
  faSpinnerThird,
  faSearch,
  faInventory,
  faChevronCircleRight
} from '@fortawesome/pro-duotone-svg-icons';

import { DialogService } from '../../../shared/services/dialog.service';
import { WarehouseService } from '../../../shared/services/warehouse.service';
import { BarcodeService } from '../../../shared/services/barcode.service';

import {
  GraphQlPageableInput,
  InventoryDetails,
  InventoryGetDetailsGQL,
  InventorySetDetailsGQL,
  SimpleProductEntity,
  SimpleProductFilterGQL,
  SimpleProductFindBySkuGQL,
  SimpleProductFindByUpcGQL,
  SimpleProductInfoGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styles: []
})
export class InventoryComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;
  faInventory = faInventory;
  faChevronCircleRight = faChevronCircleRight;

  searchSku = '';
  pendingSearchSku: string = null;
  searchTitle = '';
  pendingSearchTitle: string = null;

  quantityEntry: number;
  quantityUpdated: number;

  upc = '';
  sku = '';
  bin = '';

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  loading = 0;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;

  inventoryDetails: InventoryDetails;
  simpleProduct: SimpleProductEntity;
  searchBySkuResults: SimpleProductEntity[];
  searchByTitleResults: SimpleProductEntity[];

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private barcodeService: BarcodeService,
    private simpleProductInfo: SimpleProductInfoGQL,
    private simpleProductFindByUpcGQL: SimpleProductFindByUpcGQL,
    private simpleProductFindBySkuGQL: SimpleProductFindBySkuGQL,
    private simpleProductFilterGQL: SimpleProductFilterGQL,
    private inventoryGetDetailsGQL: InventoryGetDetailsGQL,
    private inventorySetDetailsGQL: InventorySetDetailsGQL
  ) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;
        this.route.queryParams.subscribe(
          (params) => {
            if (params.id) {
              this.load(params.id);
            }
          },
          (error) => {
            this.warehouse = null;
          }
        );
      }
    );

    this.upcScannedSubscription = this.barcodeService.upcScanned$.subscribe(
      (upc) => {
        this.upc = upc;
        if (this.upc) {
          this.loading++;
          this.changeDetectorRef.detectChanges();
          this.simpleProductFindByUpcGQL
            .fetch({ upc: this.upc })
            .pipe(map((result) => result.data.simpleProductFindByUpc))
            .subscribe(
              (result) => {
                this.simpleProduct = result as SimpleProductEntity;
                this.loading--;
                this.quantityUpdated = null;
                this.quantityEntry = null;
                this.changeDetectorRef.detectChanges();
                this.getInventory();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.inventoryDetails = null;
                this.dialogService.showErrorMessageBox(error);
                this.changeDetectorRef.detectChanges();
              }
            );
        }
      }
    );

    this.skuScannedSubscription = this.barcodeService.skuScanned$.subscribe(
      (sku) => {
        this.sku = sku;
        if (this.sku) {
          this.loading++;
          this.changeDetectorRef.detectChanges();
          this.simpleProductFindBySkuGQL
            .fetch({ sku: this.sku })
            .pipe(map((result) => result.data.simpleProductFindBySku))
            .subscribe(
              (result) => {
                this.simpleProduct = result as SimpleProductEntity;
                this.loading--;
                this.quantityUpdated = null;
                this.quantityEntry = null;
                this.changeDetectorRef.detectChanges();
                this.getInventory();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.inventoryDetails = null;
                this.dialogService.showErrorMessageBox(error);
                this.changeDetectorRef.detectChanges();
              }
            );
        }
      }
    );
  }

  load(id: string) {
    this.searchSku = '';
    this.searchTitle = '';
    this.searchBySkuResults = [];
    this.searchByTitleResults = [];
    this.loading++;
    this.changeDetectorRef.detectChanges();
    this.simpleProductInfo
      .fetch({ id })
      .pipe(map((result) => result.data.simpleProductInfo))
      .subscribe(
        (result) => {
          this.simpleProduct = result as SimpleProductEntity;
          this.loading--;
          this.quantityUpdated = null;
          this.quantityEntry = null;

          this.changeDetectorRef.detectChanges();
          this.getInventory();
        },
        (error) => {
          console.error(error);
          this.loading--;
          this.inventoryDetails = null;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  getInventory() {
    this.inventoryGetDetailsGQL
      .mutate({ warehouse: this.warehouse.name, id: this.simpleProduct.id })
      .pipe(map((result) => result.data.inventoryGetDetails))
      .subscribe(
        (result) => {
          this.inventoryDetails = result as InventoryDetails;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.inventoryDetails = null;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  setInventory() {
    this.quantityUpdated = this.quantityEntry;
    // TODO: when this is returned from server, don't calculate here
    this.inventoryDetails.warehouseQuantityOnShelf = this.quantityUpdated;
    this.inventoryDetails.warehouseQuantityAvailable =
      this.inventoryDetails.warehouseQuantityOnShelf -
      this.inventoryDetails.warehouseQuantityUnshipped;
    // and remove the TODO below
    this.inventorySetDetailsGQL
      .mutate({
        warehouse: this.warehouse.name,
        id: this.simpleProduct.id,
        quantity: this.quantityEntry
      })
      .pipe(map((result) => result.data.inventorySetDetails))
      .subscribe(
        (result) => {
          // TODO: get this from the server
          // this.inventoryDetails = result as InventoryDetails;
          // and remove the TODO above.
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.inventoryDetails = null;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  searchBySku() {
    this.searchTitle = '';
    this.searchByTitleResults = [];
    if (this.pendingSearchSku == null) {
      if (this.searchSku === '') {
        this.searchBySkuResults = [];
      } else {
        this.pendingSearchSku = this.searchSku;
        const pageable: GraphQlPageableInput = {
          page: 1,
          pageSize: 5
        };

        this.simpleProductFilterGQL
          .fetch({
            pageable,
            sku: this.pendingSearchSku + '%'
          })
          .pipe(map((result) => result.data.simpleProductFilter.data))
          .subscribe(
            (result) => {
              this.searchBySkuResults = result as SimpleProductEntity[];
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchSku !== this.searchSku) {
                this.pendingSearchSku = null;
                this.searchBySku();
              } else {
                this.pendingSearchSku = null;
              }
            },
            (error) => {
              console.error(error);
              this.dialogService.showErrorMessageBox(error);
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchSku !== this.searchSku) {
                this.pendingSearchSku = null;
                this.searchBySku();
              } else {
                this.pendingSearchSku = null;
              }
            }
          );
      }
    }
  }

  searchByTitle() {
    this.searchSku = '';
    this.searchBySkuResults = [];
    if (this.pendingSearchTitle == null) {
      if (this.searchTitle === '') {
        this.searchByTitleResults = [];
      } else {
        this.pendingSearchTitle = this.searchTitle;
        const pageable: GraphQlPageableInput = {
          page: 1,
          pageSize: 5
        };

        this.simpleProductFilterGQL
          .fetch({
            pageable,
            title: '%' + this.pendingSearchTitle + '%'
          })
          .pipe(map((result) => result.data.simpleProductFilter.data))
          .subscribe(
            (result) => {
              this.searchByTitleResults = result as SimpleProductEntity[];
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchTitle !== this.searchTitle) {
                this.pendingSearchTitle = null;
                this.searchByTitle();
              } else {
                this.pendingSearchTitle = null;
              }
            },
            (error) => {
              console.error(error);
              this.dialogService.showErrorMessageBox(error);
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchTitle !== this.searchTitle) {
                this.pendingSearchTitle = null;
                this.searchByTitle();
              } else {
                this.pendingSearchTitle = null;
              }
            }
          );
      }
    }
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.upcScannedSubscription.unsubscribe();
    this.skuScannedSubscription.unsubscribe();
  }
}
