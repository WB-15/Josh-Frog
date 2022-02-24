import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService, SearchType } from '../../services/search.service';
import { faSearch } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styles: []
})
export class ProductSearchComponent {
  @Input() searchTypes: SearchType[];
  @Output() productSelected = new EventEmitter<string>();

  searchData = this.searchService.getSearchDataByMultipleTypes();
  faSearch = faSearch;

  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.searchProductsByMultipleTypes(this.searchTypes);
  }

  select(productId: string) {
    this.searchService.clearSearchData();
    this.productSelected.emit(productId);
  }
}
