import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faChevronCircleRight, faHandReceiving, faSearch, faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { QueryOptionsAlone } from 'apollo-angular/types';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  InventoryAddDetailsGQL,
  PurchaseOrderItemEntity,
  PurchaseOrderOpenItemsGQL,
  SimpleProductClearBinGQL,
  SimpleProductEntity,
  SimpleProductFindBySkuGQL,
  SimpleProductFindByUpcGQL,
  SimpleProductInfoGQL,
  SimpleProductSetBinGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { ChangeBinComponent } from '../../../inventory/dialogs/change-bin/change-bin.component';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { BarcodeService } from '../../../shared/services/barcode.service';

import { DialogService } from '../../../shared/services/dialog.service';
import { SearchService, SearchType } from '../../../shared/services/search.service';
import { WarehouseService } from '../../../shared/services/warehouse.service';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.scss']
})
export class ReceivingComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;
  faHandReceiving = faHandReceiving;
  faChevronCircleRight = faChevronCircleRight;

  quantityEntry: number;
  quantityReceived: number;

  upc = '';
  sku = '';
  bin = '';

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  loading = 0;
  loadingPurchaseOrders = true;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;
  binScannedSubscription: Subscription;
  searchDataSubscription: Subscription;

  simpleProduct: SimpleProductEntity;
  purchaseOrderItems: PurchaseOrderItemEntity[];
  selectedPurchaseOrderItem: PurchaseOrderItemEntity;
  //TODO: Add SearchType.VENDOR when it is hooked up
  searchTypes = [SearchType.SKU, SearchType.TITLE];

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private barcodeService: BarcodeService,
    private searchService: SearchService,
    private simpleProductInfo: SimpleProductInfoGQL,
    private simpleProductFindByUpcGQL: SimpleProductFindByUpcGQL,
    private simpleProductFindBySkuGQL: SimpleProductFindBySkuGQL,
    private simpleProductSetBinGQL: SimpleProductSetBinGQL,
    private simpleProductClearBinGQL: SimpleProductClearBinGQL,
    private inventoryAddDetailsGQL: InventoryAddDetailsGQL,
    private purchaseOrderOpenItemsGQL: PurchaseOrderOpenItemsGQL
  ) {}

  ngOnInit() {
    this.searchService.clearSearchData();
    this.searchDataSubscription = this.searchService.dataUpdated.subscribe(() => this.changeDetectorRef.detectChanges());

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
                this.setProduct(result);
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
                this.setProduct(result);
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

    this.binScannedSubscription = this.barcodeService.binScanned$.subscribe(
      (bin) => {
        if (bin != null && this.simpleProduct) {
          //this.ngZone.run(() => {
          this.showChangeBinDialog(bin);
          //});
        }
      }
    );
  }

  load(id: string) {
    this.loading++;
    this.changeDetectorRef.detectChanges();
    this.simpleProductInfo
      .fetch({ id })
      .pipe(map((result) => result.data.simpleProductInfo))
      .subscribe(
        (result) => {
          this.setProduct(result);
        },
        (error) => {
          console.error(error);
          this.loading--;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  loadPurchaseOrderOpenItems(simpleProduct: SimpleProductEntity) {
    this.loadingPurchaseOrders = true;
    delete this.purchaseOrderItems;
    delete this.selectedPurchaseOrderItem;

    this.purchaseOrderOpenItemsGQL
      .fetch(
        { simpleProductId: simpleProduct.id },
        { fetchPolicy: 'network-only' } as QueryOptionsAlone<any>
      )
      .pipe(map((result) => result.data.purchaseOrderOpenItems))
      .subscribe(
        (result) => {
          this.purchaseOrderItems = this.sortPurchaseOrderItemsByPlacedTime([...result]);
          if (this.purchaseOrderItems.length > 0) {
            this.selectPurchaseOrderItem(this.purchaseOrderItems[0]);
          }
          this.loadingPurchaseOrders = false;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          console.error(error);
          this.dialogService.showErrorMessageBox(error);
          this.loadingPurchaseOrders = false;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  sortPurchaseOrderItemsByPlacedTime(purchaseOrderItems: PurchaseOrderItemEntity[]) {
    return purchaseOrderItems.sort(function(a, b) {
      if (a.purchaseOrder.placedTime > b.purchaseOrder.placedTime) {
        return 1;
      }
      if (b.purchaseOrder.placedTime > a.purchaseOrder.placedTime) {
        return -1;
      }
      return 0;
    });
  }

  clearReceived() {
    delete this.quantityReceived;
    delete this.quantityEntry;
    if (this.selectedPurchaseOrderItem) {
      this.loadPurchaseOrderOpenItems(this.simpleProduct);
    }
  }

  selectPurchaseOrderItem(purchaseOrderItem: PurchaseOrderItemEntity) {
    if (this.selectedPurchaseOrderItem && this.selectedPurchaseOrderItem.id === purchaseOrderItem.id) {
      delete this.selectedPurchaseOrderItem;
    } else {
      this.selectedPurchaseOrderItem = purchaseOrderItem;
    }
  }

  setProduct(simpleProductEntity: SimpleProductEntity) {
    this.simpleProduct = simpleProductEntity;
    this.loading--;
    this.quantityReceived = null;
    this.quantityEntry = null;

    this.loadPurchaseOrderOpenItems(this.simpleProduct);

    this.changeDetectorRef.detectChanges();
  }

  receive() {
    this.quantityReceived = this.quantityEntry;
    this.inventoryAddDetailsGQL
      .mutate({
        warehouse: this.warehouse.name,
        id: this.simpleProduct.id,
        quantity: this.quantityReceived,
        purchaseOrderItemId: this.selectedPurchaseOrderItem ? this.selectedPurchaseOrderItem.id : undefined
      })
      .pipe(map((result) => result.data.inventoryAddDetails))
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

  // TODO: this is using a component from inventory, should be moved to shared
  showChangeBinDialog(binEntry: string) {
    this.ngZone.run(() => {
      const options = new DialogBoxOptions();
      options.component = ChangeBinComponent;
      options.inputs = {
        binEntry,
        simpleProduct: this.simpleProduct,
        setCallback: (bin: string) => {
          this.setBin(bin);
        },
        clearCallback: () => {
          this.clearBin();
        }
      };
      options.title = this.simpleProduct.title;
      options.okText = 'Cancel';
      this.dialogService.showDialog(options);
    });
  }

  setBin(bin: string) {
    this.simpleProductSetBinGQL
      .mutate(
        {
          warehouse: this.warehouse.name,
          id: this.simpleProduct.id,
          bin
        },
        { update: (cache) => cache.evict(this.simpleProduct.id) }
      )
      .pipe(map((result) => result.data.simpleProductSetBin))
      .subscribe(
        (result) => {
          this.simpleProduct = result as SimpleProductEntity;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  clearBin() {
    this.simpleProductClearBinGQL
      .mutate(
        {
          warehouse: this.warehouse.name,
          id: this.simpleProduct.id
        },
        { update: (cache) => cache.evict(this.simpleProduct.id) }
      )
      .pipe(map((result) => result.data.simpleProductClearBin))
      .subscribe(
        (result) => {
          this.simpleProduct = result as SimpleProductEntity;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  ngOnDestroy(): void {
    this.warehouseChangedSubscription.unsubscribe();
    this.upcScannedSubscription.unsubscribe();
    this.skuScannedSubscription.unsubscribe();
    this.binScannedSubscription.unsubscribe();
    this.searchDataSubscription.unsubscribe();
  }
}
