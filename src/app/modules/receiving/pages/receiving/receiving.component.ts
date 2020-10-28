import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  faSpinnerThird,
  faSearch,
  faHandReceiving,
  faChevronCircleRight
} from '@fortawesome/pro-duotone-svg-icons';

import { BarcodeService } from '../../../shared/services/barcode.service';
import {
  GraphQlPageableInput,
  InventoryAddGQL,
  SimpleProductEntity,
  SimpleProductFilterGQL,
  SimpleProductFindBySkuGQL,
  SimpleProductFindByUpcGQL,
  SimpleProductInfoGQL
} from '../../../../../generated/graphql';
import { MessageBoxOptions } from '../../../shared/components/message-box/message-box.component';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styles: []
})
export class ReceivingComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;
  faHandReceiving = faHandReceiving;
  faChevronCircleRight = faChevronCircleRight;

  searchTerm = '';
  pendingSearchTerm: string = null;
  quantityEntry: number;
  quantityReceived: number;

  upc = '';
  sku = '';

  loading = 0;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;

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
    private inventoryAddGQL: InventoryAddGQL
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
                this.quantityReceived = null;
                this.quantityEntry = null;
                this.changeDetectorRef.detectChanges();
              },
              (error) => {
                console.error(error);
                this.dialogService.showErrorMessageBox(error);
                this.loading--;
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
                this.quantityReceived = null;
                this.quantityEntry = null;
                this.changeDetectorRef.detectChanges();
              },
              (error) => {
                console.error(error);
                this.dialogService.showErrorMessageBox(error);
                this.loading--;
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
          this.quantityReceived = null;
          this.quantityEntry = null;

          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          console.error(error);
          this.dialogService.showErrorMessageBox(error);
          this.loading--;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  receive() {
    this.quantityReceived = this.quantityEntry;
    this.inventoryAddGQL
      .mutate({ id: this.simpleProduct.id, quantity: this.quantityReceived })
      .pipe(map((result) => result.data.inventoryAdd))
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error);
          this.dialogService.showErrorMessageBox(error);
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
