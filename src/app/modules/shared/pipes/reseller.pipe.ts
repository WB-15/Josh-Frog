import { Pipe, PipeTransform } from '@angular/core';
import { Reseller } from '../../../../generated/graphql';

@Pipe({
  name: 'reseller'
})
export class ResellerPipe implements PipeTransform {
  transform(value: Reseller, ...args: unknown[]): string {
    switch (value) {
      case Reseller.Amazon:
        return 'Amazon';
      case Reseller.Chewy:
        return 'Chewy';
      case Reseller.Dhl:
        return 'DHL';
      case Reseller.Easypost:
        return 'EasyPost';
      case Reseller.Fedex:
        return 'FedEx';
      case Reseller.Generic:
        return 'Generic';
      case Reseller.Lasership:
        return 'LaserShip';
      case Reseller.PitneyExp:
        return 'Pitney Expedited';
      case Reseller.PitneyStd:
        return 'Pitney Standard';
      case Reseller.Sendle:
        return 'Sendle';
      case Reseller.Stamps:
        return 'Stamps';
      case Reseller.Ups:
        return 'UPS';
      case Reseller.UpsAlt:
        return 'UPS Alternate';
      default:
        return value;
    }
  }
}
