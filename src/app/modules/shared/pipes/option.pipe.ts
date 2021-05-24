import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'FEDEX_ONE_RATE':
        return 'FedEx One Rate';
      case 'SATURDAY_DELIVERY':
        return 'Saturday Delivery';
      default:
        return value;
    }
  }
}
