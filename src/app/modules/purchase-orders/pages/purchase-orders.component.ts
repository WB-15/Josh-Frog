import { Component, OnDestroy, OnInit } from '@angular/core';
import { faExclamationCircle, faSearch } from '@fortawesome/pro-duotone-svg-icons';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';
import { Subscription } from 'rxjs';

import { map } from 'rxjs/operators';
import {
  GraphQlPageableInput,
  PurchaseOrderEntity,
  PurchaseOrderFilterGQL,
  PurchaseOrderStatus,
  SupplierEntity
} from '../../../../generated/graphql';
import { DialogBoxOptions } from '../../shared/components/dialog/dialog.component';
import { PurchaseOrderComponent } from '../../shared/components/purchase-order/purchase-order.component';
import { DialogService } from '../../shared/services/dialog.service';
import { SupplierService } from '../../shared/services/supplier.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit, OnDestroy {
  pageable: GraphQlPageableInput = {
    page: 1,
    pageSize: 10
  };
  count = 0;

  orderNumber: string;
  status = '';
  supplier = '';

  statusOptions = Object.values(PurchaseOrderStatus) as PurchaseOrderStatus[];
  supplierOptions: SupplierEntity[];
  suppliersChangedSubscription: Subscription;
  loading = true;
  loadingRows = new Array(this.pageable.pageSize);
  faExclamationCircle = faExclamationCircle;
  faSearch = faSearch;
  faAngleDown = faAngleDown;

  purchaseOrders: PurchaseOrderEntity[];

  constructor(
    private dialogService: DialogService,
    private supplierService: SupplierService,
    private purchaseOrderFilterGQL: PurchaseOrderFilterGQL
  ) {}

  ngOnInit() {
    this.suppliersChangedSubscription = this.supplierService.suppliersChanged$.subscribe((suppliers) => {
      if (suppliers) {
        this.supplierOptions = suppliers;
      }
    });

    this.loadPurchaseOrders();
  }

  ngOnDestroy() {
    this.suppliersChangedSubscription.unsubscribe();
  }

  setPage(page: number) {
    this.pageable.page = page;
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders() {
    this.loading = true;
    this.purchaseOrderFilterGQL.fetch({
      pageable: this.pageable,
      orderNumber: this.orderNumber ? `${this.orderNumber}%` : undefined,
      status: this.status ? this.status as PurchaseOrderStatus : undefined,
      supplier: this.supplier ? this.supplier : undefined
    })
      .pipe(map((result) => result.data.purchaseOrderFilter))
      .subscribe(
        (result) => {
          this.purchaseOrders = result.data;
          this.pageable.page = result.page;
          this.pageable.pageSize = result.pageSize;
          this.count = result.count;

          this.loading = false;
        },
        (error) => {
          delete this.purchaseOrders;
          this.dialogService.showErrorMessageBox(error);

          this.loading = false;
        }
      );
  }

  viewPurchaseOrder(purchaseOrder: PurchaseOrderEntity) {
    const options = new DialogBoxOptions();
    options.component = PurchaseOrderComponent;
    options.inputs = { purchaseOrder: purchaseOrder };
    options.title = `Purchase Order #${purchaseOrder.orderNumber}`;
    this.dialogService.showDialog(options);
  }
}
