import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  faChevronCircleRight,
  faDollarSign,
  faSearch,
  faSpinnerThird,
  faTags
} from '@fortawesome/pro-duotone-svg-icons';
import {
  SimpleProductEntity,
  SimpleProductFindBySkuGQL,
  SimpleProductFindByUpcGQL,
  SimpleProductInfoGQL
} from '../../../../../generated/graphql';
import { BarcodeService } from '../../../shared/services/barcode.service';
import { PrinterService } from '../../../shared/services/printer.service';
import { SearchService, SearchType } from '../../../shared/services/search.service';

@Component({
  selector: 'app-plant-labels',
  templateUrl: './plant-labels.component.html',
  styles: []
})
export class PlantLabelsComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;
  faDollarSign = faDollarSign;
  faTags = faTags;
  faChevronCircleRight = faChevronCircleRight;

  priceOption = 'no_price';
  customPrice: number;
  quantityEntry: number;

  upc = '';
  sku = '';

  loading = 0;
  upcScannedSubscription: Subscription;
  skuScannedSubscription: Subscription;
  searchDataSubscription: Subscription;

  simpleProduct: SimpleProductEntity;
  searchData = this.searchService.getSearchData();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private barcodeService: BarcodeService,
    private printerService: PrinterService,
    private searchService: SearchService,
    private simpleProductInfo: SimpleProductInfoGQL,
    private simpleProductFindByUpcGQL: SimpleProductFindByUpcGQL,
    private simpleProductFindBySkuGQL: SimpleProductFindBySkuGQL
  ) {}

  ngOnInit() {
    this.searchService.clearSearchData();
    this.searchDataSubscription = this.searchService.dataUpdated.subscribe(() => this.changeDetectorRef.detectChanges());

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
              },
              (error) => {
                console.error(error);
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
                this.changeDetectorRef.detectChanges();
              },
              (error) => {
                console.error(error);
                this.loading--;
                this.changeDetectorRef.detectChanges();
              }
            );
        }
      }
    );
  }

  print() {
    let price = null;
    if (this.priceOption === 'web_price') {
      price = this.simpleProduct.price;
    } else if (this.priceOption === 'custom_price') {
      if (this.customPrice) {
        price = this.customPrice;
      } else {
        price = this.simpleProduct.price;
      }
    }

    this.printerService.printProductLabel(
      this.simpleProduct.sku,
      this.simpleProduct.title,
      price,
      this.quantityEntry
    );
  }

  load(id: string) {
    this.searchService.clearSearchData();
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
        },
        (error) => {
          // console.error(error);
          this.loading--;
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  search() {
    const searchParam = { department: 'Plants' };
    this.searchService.searchProducts(SearchType.TITLE, searchParam);
  }

  ngOnDestroy(): void {
    this.upcScannedSubscription.unsubscribe();
    this.skuScannedSubscription.unsubscribe();
    this.searchDataSubscription.unsubscribe();
  }
}
