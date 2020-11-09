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
import { ActivatedRoute } from '@angular/router';

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

  searchSku = '';
  pendingSearchSku: string = null;
  searchTitle = '';
  pendingSearchTitle: string = null;

  quantityEntry: number;
  quantityReceived: number;

  upc = '';
  sku = '';

  loading = 0;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;

  simpleProduct: SimpleProductEntity;
  searchBySkuResults: SimpleProductEntity[];
  searchByTitleResults: SimpleProductEntity[];

  constructor(
    private route: ActivatedRoute,
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
    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.load(params.id);
      }
    });

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
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          console.error(error);
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
    this.upcScannedSubscription.unsubscribe();
    this.skuScannedSubscription.unsubscribe();
  }
}
