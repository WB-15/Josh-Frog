import { Pipe, PipeTransform } from '@angular/core';
import { ShipmentStatus } from 'src/generated/graphql';

@Pipe({
  name: 'shipmentStatus'
})
export class ShipmentStatusPipe implements PipeTransform {
  transform(value: ShipmentStatus, ...args: unknown[]): string {
    switch (value) {
      case ShipmentStatus.Pending:
        return 'Pending';
      case ShipmentStatus.NeedsScheduling:
        return 'Needs Scheduling';
      case ShipmentStatus.Unshipped:
        return 'Unshipped';
      case ShipmentStatus.Labelled:
        return 'Label Created';
      case ShipmentStatus.Shipped:
        return 'Shipped';
      case ShipmentStatus.Delivered:
        return 'Delivered';
      case ShipmentStatus.External:
        return 'Shipped Offline';
      case ShipmentStatus.Cancelled:
        return 'Cancelled';
    }
  }
}
