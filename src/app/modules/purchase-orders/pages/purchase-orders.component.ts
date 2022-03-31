import { Component, OnInit } from '@angular/core';
import { GraphQlPageableInput, PurchaseRequestEntity, PurchaseRequestFilterGQL } from '../../../../generated/graphql';
import { map } from 'rxjs/operators';
import { DialogService } from '../../shared/services/dialog.service';


@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {
  pageable: GraphQlPageableInput = {
    page: 1,
    pageSize: 10
  };
  count = 0;

  loading = true;
  loadingRows = new Array(this.pageable.pageSize);

  purchaseOrders: PurchaseRequestEntity[];

  constructor(
    private dialogService: DialogService,
    private purchaseRequestFilterGQL: PurchaseRequestFilterGQL
  ) {}

  ngOnInit() {
    this.loadPurchaseOrders();
  }

  setPage(page: number) {
    this.pageable.page = page;
    this.loadPurchaseOrders();
  }

  // Todo: switch out graphql
  loadPurchaseOrders() {
    this.loading = true;
    this.purchaseRequestFilterGQL.fetch({
      pageable: this.pageable
    })
      .pipe(map((result) => result.data.purchaseRequestFilter))
      .subscribe(
        (result) => {
          this.purchaseOrders = result.data;
          this.pageable.page = result.page;
          this.pageable.pageSize = result.pageSize;
          this.count = result.count;

          this.loading = false;
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
          this.loading = false;
        }
      );
  }

  // Todo
  viewPurchaseOrder(purchaseOrder: PurchaseRequestEntity) {

  }
}
