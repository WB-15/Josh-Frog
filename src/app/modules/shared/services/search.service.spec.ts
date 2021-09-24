import { fakeAsync, TestBed } from '@angular/core/testing';

import { SearchService, SearchType } from './search.service';
import { Subject } from 'rxjs';
import { SimpleProductFilterDocument } from '../../../../generated/graphql';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DialogService } from './dialog.service';

describe('SearchService', () => {
  let service: SearchService;
  let dialogService: DialogService;
  let backend: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    });
    service = TestBed.inject(SearchService);
    dialogService = TestBed.inject(DialogService);
    backend = TestBed.inject(ApolloTestingController);
  });

  describe('getSearchData', () => {
    it('returns the data object', () => {
      const data = service.getSearchData();
      data.sku.value = '1234';
      expect(service.getSearchData().sku.value).toBe('1234');
    });
  });

  describe('clearSearchData', () => {
    it('resets the data', () => {
      const data = service.getSearchData();
      data.sku.value = '1234';
      data.sku.results = [{ id: '1234' }];
      service.clearSearchData();
      expect(service.getSearchData().sku.value).toBe('');
      expect(service.getSearchData().sku.results).toEqual([]);
    });

    it('does not reset provided type', () => {
      const data = service.getSearchData();
      data.sku.value = '1234';
      data.sku.results = [{ id: '1234' }];
      service.clearSearchData(SearchType.SKU);
      expect(service.getSearchData().sku.value).toBe('1234');
      expect(service.getSearchData().sku.results).toEqual([{ id: '1234' }]);
    });
  });

  describe('searchProducts', () => {
    it('calls clearSearchData', () => {
      spyOn(service, 'clearSearchData');
      service.searchProducts(SearchType.SKU);

      expect(service.clearSearchData).toHaveBeenCalledWith(SearchType.SKU);
    });

    it('does nothing if pending is not null', () => {
      spyOn(service, 'searchProductsByMultipleTypes');
      service.getSearchData().sku.pending = '1234';
      service.searchProducts(SearchType.SKU);

      expect(service.searchProductsByMultipleTypes).not.toHaveBeenCalled();
    });

    it('clears results if value is empty', () => {
      spyOn(service, 'searchProductsByMultipleTypes');
      service.getSearchData().sku.results = [{ id: '1234' }];
      service.searchProducts(SearchType.SKU);

      expect(service.searchProductsByMultipleTypes).not.toHaveBeenCalled();
      expect(service.getSearchData().sku.results).toEqual([]);
    });

    it('succeeds', () => {
      const mockCall = new Subject<any>();
      spyOn(service, 'searchProductsByMultipleTypes').and.returnValue(mockCall.asObservable());
      spyOn(service, 'searchFinished');
      service.getSearchData().sku.value = '1234';
      service.searchProducts(SearchType.SKU);

      expect(service.getSearchData().sku.pending).toBe('1234');

      mockCall.next({ data: [{ id: '1234' }] });

      expect(service.searchProductsByMultipleTypes).toHaveBeenCalled();
      expect(service.searchFinished).toHaveBeenCalledWith(SearchType.SKU);
      expect(service.getSearchData().sku.results).toEqual([{ id: '1234' }]);
    });

    it('handles errors', () => {
      const mockCall = new Subject<any>();
      spyOn(service, 'searchProductsByMultipleTypes').and.returnValue(mockCall.asObservable());
      spyOn(service, 'handleSearchError');
      service.getSearchData().sku.value = '1234';
      service.searchProducts(SearchType.SKU);

      expect(service.getSearchData().sku.pending).toBe('1234');

      const error = new Error();
      mockCall.error(error);

      expect(service.searchProductsByMultipleTypes).toHaveBeenCalled();
      expect(service.handleSearchError).toHaveBeenCalledWith(error, SearchType.SKU);
    });
  });

  describe('searchProductsByMultipleTypes', () => {
    it('sets params from pending', () => {
      const data = service.getSearchData();
      data.title.pending = '1234';
      data.title.value = '5678';
      data.sku.pending = '4321';
      data.sku.value = '8765';
      service.searchProductsByMultipleTypes().subscribe();

      const call = backend.expectOne(SimpleProductFilterDocument);
      expect(call.operation.variables.pageable).toEqual({ page: 1, pageSize: 5 });
      expect(call.operation.variables.title).toEqual('%1234%');
      expect(call.operation.variables.sku).toEqual('4321%');

      backend.verify();
    });

    it('sets params from value', () => {
      const data = service.getSearchData();
      data.title.pending = '';
      data.title.value = '5678';
      data.sku.pending = null;
      data.sku.value = '8765';
      service.searchProductsByMultipleTypes().subscribe();

      const call = backend.expectOne(SimpleProductFilterDocument);
      expect(call.operation.variables.pageable).toEqual({ page: 1, pageSize: 5 });
      expect(call.operation.variables.title).toEqual('%5678%');
      expect(call.operation.variables.sku).toEqual('8765%');

      backend.verify();
    });

    it('adds additional search params', () => {
      const pageable = {
        page: 1,
        pageSize: 20
      };
      service.searchProductsByMultipleTypes({ pageable }).subscribe();

      const call = backend.expectOne(SimpleProductFilterDocument);
      expect(call.operation.variables.pageable).toEqual(pageable);

      backend.verify();
    });

    it('returns data', fakeAsync(() => {
      const response = { data: { simpleProductFilter: { count: 1, pageSize: 1, page: 1, data: [{ id: '1234' }] } } };
      service.searchProductsByMultipleTypes().subscribe((result) => {
        expect(result).toBe(response.data.simpleProductFilter);
      });
      const call = backend.expectOne(SimpleProductFilterDocument);
      call.flush(response);

      backend.verify();
    }));
  });

  describe('handleSearchError', () => {
    it('handles errors', () => {
      spyOn(console, 'error');
      spyOn(dialogService, 'showErrorMessageBox');
      spyOn(service, 'searchFinished');
      const error = new Error();
      service.handleSearchError(error, SearchType.SKU);

      expect(console.error).toHaveBeenCalledWith(error);
      expect(dialogService.showErrorMessageBox).toHaveBeenCalledWith(error);
      expect(service.searchFinished).toHaveBeenCalledWith(SearchType.SKU);
    });
  });

  describe('searchFinished', () => {
    it('emits data updated event', () => {
      const data = service.getSearchData();
      data.sku.value = '1234';
      data.sku.pending = '1234';
      spyOn(service, 'searchProducts');
      spyOn(service.dataUpdated, 'emit');
      service.searchFinished(SearchType.SKU);

      expect(service.dataUpdated.emit).toHaveBeenCalled();
      expect(service.searchProducts).not.toHaveBeenCalled();
    });

    it('recalls search if value changed', () => {
      const data = service.getSearchData();
      data.sku.value = '12345';
      data.sku.pending = '1234';
      spyOn(service, 'searchProducts');
      spyOn(service.dataUpdated, 'emit');
      service.searchFinished(SearchType.SKU);

      expect(service.dataUpdated.emit).toHaveBeenCalled();
      expect(service.searchProducts).toHaveBeenCalledWith(SearchType.SKU);
    });
  });
});
