import { Component, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';
import { map } from 'rxjs/operators';
import { GraphQlPageableInput, PurchaseOrderEntity, PurchaseOrderFilterGQL } from '../../../../generated/graphql';
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
  faExclamationCircle = faExclamationCircle;

  purchaseOrders: PurchaseOrderEntity[];

  constructor(
    private dialogService: DialogService,
    private purchaseOrderFilterGQL: PurchaseOrderFilterGQL
  ) {}

  ngOnInit() {
    this.loadPurchaseOrders();
  }

  setPage(page: number) {
    this.pageable.page = page;
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders() {
    this.loading = true;
    this.purchaseOrderFilterGQL.fetch({
      pageable: this.pageable
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

  // Todo
  viewPurchaseOrder(purchaseOrder: PurchaseOrderEntity) {

  }
}
