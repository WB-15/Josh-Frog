import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SupplierEntity, SupplierListGQL } from '../../../../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private isBrowser: boolean;
  private suppliers: SupplierEntity[] = null;
  private supplierSubject$ = new BehaviorSubject<SupplierEntity[]>(
    this.suppliers
  );
  public suppliersChanged$ = this.supplierSubject$.asObservable();

  constructor(
    private supplierListGQL: SupplierListGQL,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.getSuppliers();
  }

  private getSuppliers(): void {
    if (this.isBrowser && this.suppliers == null) {
      this.supplierListGQL
        .fetch()
        .pipe(map((result) => result.data.supplierList))
        .subscribe(
          (result) => {
            this.suppliers = result.data as SupplierEntity[];
            this.supplierSubject$.next(this.suppliers);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
