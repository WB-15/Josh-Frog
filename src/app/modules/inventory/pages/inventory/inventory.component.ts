import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { faSearch, faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

import { BarcodeService } from '../../../shared/services/barcode.service';

import {
  GraphQlPageableInput,
  InventoryGetGQL,
  InventoryResult,
  SimpleProductEntity,
  SimpleProductFilterGQL,
  SimpleProductFindBySkuGQL,
  SimpleProductFindByUpcGQL,
  SimpleProductInfoGQL
} from '../../../../../generated/graphql';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styles: []
})
export class InventoryComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;

  searchTerm = '';
  pendingSearchTerm: string = null;

  upc = '';
  sku = '';
  bin = '';

  loading = 0;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;

  inventoryResult: InventoryResult;
  simpleProduct: SimpleProductEntity;
  searchResults: SimpleProductEntity[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private barcodeService: BarcodeService,
    private simpleProductInfo: SimpleProductInfoGQL,
    private simpleProductFindByUpcGQL: SimpleProductFindByUpcGQL,
    private simpleProductFindBySkuGQL: SimpleProductFindBySkuGQL,
    private simpleProductFilterGQL: SimpleProductFilterGQL,
    private inventoryGetGQL: InventoryGetGQL
  ) {}

  ngOnInit() {
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
                this.changeDetectorRef.detectChanges();
                this.getInventory();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.inventoryResult = null;
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
                this.changeDetectorRef.detectChanges();
                this.getInventory();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.inventoryResult = null;
                this.dialogService.showErrorMessageBox(error);
                this.changeDetectorRef.detectChanges();
              }
            );
        }
      }
    );
  }

  load(id: string) {
    this.searchTerm = '';
    this.searchResults = [];
    this.loading++;
    this.changeDetectorRef.detectChanges();
    this.simpleProductInfo
      .fetch({ id })
      .pipe(map((result) => result.data.simpleProductInfo))
      .subscribe(
        (result) => {
          this.simpleProduct = result as SimpleProductEntity;
          this.loading--;
          this.changeDetectorRef.detectChanges();
          this.getInventory();
        },
        (error) => {
          console.error(error);
          this.loading--;
          this.inventoryResult = null;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  getInventory() {
    this.inventoryGetGQL
      .mutate({ id: this.simpleProduct.id })
      .pipe(map((result) => result.data.inventoryGet))
      .subscribe(
        (result) => {
          this.inventoryResult = result as InventoryResult;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.inventoryResult = null;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  search() {
    if (this.pendingSearchTerm == null) {
      if (this.searchTerm === '') {
        this.searchResults = [];
      } else {
        this.pendingSearchTerm = this.searchTerm;
        const pageable: GraphQlPageableInput = {
          page: 1,
          pageSize: 5
        };

        this.simpleProductFilterGQL
          .fetch({ pageable, sku: this.pendingSearchTerm + '%' })
          .pipe(map((result) => result.data.simpleProductFilter.data))
          .subscribe(
            (result) => {
              this.searchResults = result as SimpleProductEntity[];
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchTerm !== this.searchTerm) {
                this.pendingSearchTerm = null;
                this.search();
              } else {
                this.pendingSearchTerm = null;
              }
            },
            (error) => {
              console.error(error);
              this.dialogService.showErrorMessageBox(error);
              this.changeDetectorRef.detectChanges();
              if (this.pendingSearchTerm !== this.searchTerm) {
                this.pendingSearchTerm = null;
                this.search();
              } else {
                this.pendingSearchTerm = null;
              }
            }
          );
      }
    }
  }

  ngOnDestroy(): void {
    this.upcScannedSubscription.unsubscribe();
    this.skuScannedSubscription.unsubscribe();
  }
}
