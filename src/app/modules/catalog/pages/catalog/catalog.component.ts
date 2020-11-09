import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { faSpinnerThird, faSearch } from '@fortawesome/pro-duotone-svg-icons';

import {
  GraphQlPageableInput,
  SimpleProductEntity,
  SimpleProductFilterGQL
} from '../../../../../generated/graphql';
import { DialogService } from '../../../shared/services/dialog.service';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { ProductInfoComponent } from '../../dialogs/product-info/product-info.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styles: []
})
export class CatalogComponent implements OnInit {
  faSpinnerThird = faSpinnerThird;
  faSearch = faSearch;

  pageable: GraphQlPageableInput = {
    page: 1,
    pageSize: 20
  };
  count = 0;

  loading = 0;

  searchSku = '';
  searchTitle = '';
  searchResults: SimpleProductEntity[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dialogService: DialogService,
    private simpleProductFilterGQL: SimpleProductFilterGQL
  ) {}

  ngOnInit() {
    this.filter();
  }

  setPage(page: number) {
    this.pageable.page = page;
    this.filter();
  }

  search() {
    this.pageable.page = 1;
    this.filter();
  }

  filter() {
    this.loading++;
    this.simpleProductFilterGQL
      .fetch({
        pageable: this.pageable,
        sku: this.searchSku + '%',
        title: '%' + this.searchTitle + '%'
      })
      .pipe(map((result) => result.data.simpleProductFilter))
      .subscribe(
        (result) => {
          this.searchResults = result.data as SimpleProductEntity[];
          this.pageable.page = result.page;
          this.pageable.pageSize = result.pageSize;
          this.count = result.count;
          this.loading--;
          this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.loading--;
          this.dialogService.showErrorMessageBox(error);
          this.changeDetectorRef.detectChanges();
        }
      );
  }

  showInfoDialog(simpleProduct: SimpleProductEntity) {
    const options = new DialogBoxOptions();
    options.component = ProductInfoComponent;
    options.inputs = { simpleProduct };
    options.title = simpleProduct.title;
    this.dialogService.showDialog(options);
  }
}
