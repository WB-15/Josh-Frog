import { EventEmitter, Injectable } from '@angular/core';
import { GraphQlPageableInput, SimpleProductEntity, SimpleProductFilterGQL } from '../../../../generated/graphql';
import { DialogService } from './dialog.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public dataUpdated = new EventEmitter();
  private searchData: { [key in SearchType]: { value: string, pending?: string, results?: SimpleProductEntity[] } } = {
    sku: {
      value: '',
      pending: null,
      results: []
    },
    title: {
      value: '',
      pending: null,
      results: []
    },
    bin: {
      value: '',
      pending: null,
      results: []
    },
    vendor_reference: {
      value: '',
      pending: null,
      results: []
    }
  };

  constructor(
    private simpleProductFilterGQL: SimpleProductFilterGQL,
    private dialogService: DialogService
  ) {}

  getSearchData() {
    return this.searchData;
  }

  clearSearchData(except?: SearchType) {
    for (const field of Object.keys(this.searchData)) {
      if (field !== except) {
        this.searchData[field].value = '';
        if (this.searchData[field].results) {
          this.searchData[field].results = [];
        }
      }
    }
  }

  searchProducts(type: SearchType, additionalSearchParams?: object) {
    this.clearSearchData(type);
    if (this.searchData[type].pending == null) {
      if (this.searchData[type].value === '') {
        this.searchData[type].results = [];
      } else {
        this.searchData[type].pending = this.searchData[type].value;

        this.searchProductsByMultipleTypes(additionalSearchParams).subscribe(
          (result) => {
            this.searchData[type].results = result.data as SimpleProductEntity[];
            this.searchFinished(type, additionalSearchParams);
          },
          (error) => {
            this.handleSearchError(error, type, additionalSearchParams);
          }
        );
      }
    }
  }

  searchProductsByMultipleTypes(additionalSearchParams?: object) {
    const pageable: GraphQlPageableInput = {
      page: 1,
      pageSize: 5
    };
    const fetchParam = { pageable };
    const title = this.searchData[SearchType.TITLE].pending || this.searchData[SearchType.TITLE].value;
    if (title) {
      fetchParam[SearchType.TITLE] = `%${title}%`;
    }
    const sku = this.searchData[SearchType.SKU].pending || this.searchData[SearchType.SKU].value;
    if (sku) {
      fetchParam[SearchType.SKU] = `${sku}%`;
    }
    const bin = this.searchData[SearchType.BIN].pending || this.searchData[SearchType.BIN].value;
    if (bin) {
      fetchParam[SearchType.BIN] = `%${bin}%`;
    }
    const vendor = this.searchData[SearchType.VENDOR_REFERENCE].pending || this.searchData[SearchType.VENDOR_REFERENCE].value;
    if (vendor) {
      fetchParam[SearchType.VENDOR_REFERENCE] = `%${vendor}%`;
    }
    if (additionalSearchParams) {
      Object.assign(fetchParam, additionalSearchParams);
    }

    return this.simpleProductFilterGQL
      .fetch(fetchParam)
      .pipe(map((result) => result.data.simpleProductFilter));
  }

  handleSearchError(error, type: SearchType, additionalSearchParams?: object) {
    console.error(error);
    this.dialogService.showErrorMessageBox(error);
    this.searchFinished(type, additionalSearchParams);
  }

  searchFinished(type: SearchType, additionalSearchParams?: object) {
    this.dataUpdated.emit();
    if (this.searchData[type].pending !== this.searchData[type].value) {
      this.searchData[type].pending = null;
      this.searchProducts(type, additionalSearchParams);
    } else {
      this.searchData[type].pending = null;
    }
  }
}

export enum SearchType {
  SKU = 'sku',
  TITLE = 'title',
  BIN = 'bin',
  VENDOR_REFERENCE = 'vendor_reference'
}
