import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carrier'
})
export class CarrierPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'FEDEX':
        return 'FedEx';
      case 'USPS':
        return 'USPS';
      case 'UPS':
        return 'UPS';
      case 'DHL':
        return 'DHL';
      default:
        return value;
    }
  }
}
