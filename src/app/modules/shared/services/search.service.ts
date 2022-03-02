import { EventEmitter, Injectable } from '@angular/core';
import { GraphQlPageableInput, SimpleProductEntity, SimpleProductFilterGQL } from '../../../../generated/graphql';
import { DialogService } from './dialog.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public dataUpdated = new EventEmitter();
  private searchDataByMultipleTypes: { value: string, pending: string, results: SimpleProductEntity[] } = {
    value: '',
    pending: null,
    results: []
  };
  private searchData: { [key in SearchType]: { value: string, pending?: string, results?: SimpleProductEntity[] } } = {
    [SearchType.SKU]: {
      value: '',
      pending: null,
      results: []
    },
    [SearchType.TITLE]: {
      value: '',
      pending: null,
      results: []
    },
    [SearchType.BIN]: {
      value: '',
      pending: null,
      results: []
    },
    [SearchType.VENDOR]: {
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
    this.searchDataByMultipleTypes.value = '';
    this.searchDataByMultipleTypes.results = [];
  }

  searchProducts(type: SearchType, additionalSearchParams?: object) {
    this.clearSearchData(type);
    if (this.searchData[type].pending == null) {
      if (this.searchData[type].value === '') {
        this.searchData[type].results = [];
      } else {
        this.searchData[type].pending = this.searchData[type].value;

        this.searchProductsByAllTypes(additionalSearchParams).subscribe(
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

  searchProductsByAllTypes(additionalSearchParams?: object) {
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
    const vendor = this.searchData[SearchType.VENDOR].pending || this.searchData[SearchType.VENDOR].value;
    if (vendor) {
      fetchParam[SearchType.VENDOR] = `%${vendor}%`;
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

  getSearchDataByMultipleTypes() {
    return this.searchDataByMultipleTypes;
  }

  searchProductsByMultipleTypes(types: SearchType[], additionalSearchParams?: object) {
    if (this.searchDataByMultipleTypes.pending == null) {
      if (this.searchDataByMultipleTypes.value === '') {
        this.searchDataByMultipleTypes.results = [];
      } else {
        this.searchDataByMultipleTypes.pending = this.searchDataByMultipleTypes.value;

        this.getMultipleTypesObservable(types, additionalSearchParams).subscribe(
          (results: any) => {
            const data = [];
            // Combine search results
            results.forEach(result => {
              data.push(...result.data);
            })
            // Remove duplicate products
            this.searchDataByMultipleTypes.results = data.filter((v,i,a)=>a.findIndex(t=>(t.id===v.id))===i);

            this.searchMultipleTypesFinished(types, additionalSearchParams);
          },
          (error) => {
            this.handleSearchMultipleTypesError(error, types, additionalSearchParams);
          }
        );
      }
    }
  }

  private getMultipleTypesObservable(types: SearchType[], additionalSearchParams?: object) {
    const pageable: GraphQlPageableInput = {
      page: 1,
      pageSize: 5
    };
    const fetchParam = { pageable };

    if (additionalSearchParams) {
      Object.assign(fetchParam, additionalSearchParams);
    }
    const observables = [];


    if (types.includes(SearchType.TITLE)) {
      const title = this.simpleProductFilterGQL
        .fetch(Object.assign({'title': `%${this.searchDataByMultipleTypes.pending}%`}, fetchParam))
        .pipe(map((result) => result.data.simpleProductFilter));
      observables.push(title);

    }
    if (types.includes(SearchType.SKU)) {
      const sku = this.simpleProductFilterGQL
        .fetch(Object.assign({'sku': `${this.searchDataByMultipleTypes.pending}%`}, fetchParam))
        .pipe(map((result) => result.data.simpleProductFilter));
      observables.push(sku);
    }

    return forkJoin(observables);
  }

  searchMultipleTypesFinished(types: SearchType[], additionalSearchParams?: object) {
    this.dataUpdated.emit();
    if (this.searchDataByMultipleTypes.pending !== this.searchDataByMultipleTypes.value) {
      this.searchDataByMultipleTypes.pending = null;
      this.searchProductsByMultipleTypes(types, additionalSearchParams);
    } else {
      this.searchDataByMultipleTypes.pending = null;
    }
  }

  handleSearchMultipleTypesError(error, types: SearchType[], additionalSearchParams?: object) {
    console.error(error);
    this.dialogService.showErrorMessageBox(error);
    this.searchMultipleTypesFinished(types, additionalSearchParams);
  }
}

export enum SearchType {
  SKU = 'sku',
  TITLE = 'title',
  BIN = 'bin',
  VENDOR = 'vendor'
}
