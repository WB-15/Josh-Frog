import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shippingNeeds'
})
export class ShippingNeedsPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'ItemNotShipped':
        return 'Electronic Delivery';
      case 'StoreShowPickupOnly':
        return 'Warehouse/Show Pickup';
      case 'ScheduleWithCustomer':
        return 'Delivery Scheduled After Checkout';
      case 'CourierDelivery':
        return 'Delivered By Courier';
      default:
        return 'Special Delivery';
    }
  }
}
