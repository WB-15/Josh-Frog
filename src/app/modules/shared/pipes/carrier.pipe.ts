import { Pipe, PipeTransform } from '@angular/core';
import { Carrier } from '../../../../generated/graphql';

@Pipe({
  name: 'carrier'
})
export class CarrierPipe implements PipeTransform {
  transform(value: Carrier, ...args: unknown[]): string {
    switch (value) {
      case Carrier.Fedex:
        return 'FedEx';
      case Carrier.Usps:
        return 'USPS';
      case Carrier.Ups:
        return 'UPS';
      case Carrier.Dhl:
        return 'DHL';
      case Carrier.Lasership:
        return 'LaserShip';
      case Carrier.Roadie:
        return 'Roadie';
      case Carrier.Globaltranz:
        return 'GlobalTranz';
      default:
        return value;
    }
  }
}
