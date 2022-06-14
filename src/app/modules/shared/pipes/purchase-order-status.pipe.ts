import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseOrderStatus } from '../../../../generated/graphql';

@Pipe({
  name: 'purchaseOrderStatus'
})
export class PurchaseOrderStatusPipe implements PipeTransform {
  transform(value: PurchaseOrderStatus, ...args: unknown[]): string {
    switch (value) {
      case PurchaseOrderStatus.Open:
        return 'Open';
      case PurchaseOrderStatus.PartiallyReceived:
        return 'Partially Received';
      case PurchaseOrderStatus.Closed:
        return 'Closed';
      default:
        return value;
    }
  }
}
