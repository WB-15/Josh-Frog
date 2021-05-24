import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packaging'
})
export class PackagingPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'CARDBOARD_BOX':
        return 'Cardboard Box';
      case 'POLY_BAG_12X15':
        return 'Poly Bag';
      default:
        return value;
    }
  }
}
