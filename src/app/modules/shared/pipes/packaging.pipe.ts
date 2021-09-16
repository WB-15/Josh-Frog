import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packaging'
})
export class PackagingPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'CARDBOARD_BOX':
        return 'Cardboard Box';
      case 'REGIONAL_BOX_A':
        return 'Regional Box A';
      case 'REGIONAL_BOX_B':
        return 'Regional Box B';
      case 'FLAT_RATE_ENVELOPE':
        return 'Flat Rate Envelope';
      case 'POLY_BAG_12X15':
        return 'Poly Bag';
      default:
        return value;
    }
  }
}
