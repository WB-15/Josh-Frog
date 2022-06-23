import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'warehousePipe'
})
export class WarehousePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'TIMBERLINE':
        return 'Timberline';
      case 'OWOSSO_OVERSTOCK':
        return 'Owosso Overstock';
      case 'ZEN_HABITATS':
        return 'Zen Habitats';
      case 'TRADESHOW':
        return 'Tradeshow';
      case 'MICE_DIRECT':
        return 'Mice Direct';
      case 'DURAND':
        return 'Durand';
      case 'OWOSSO':
        return 'Owosso';
      case 'DAVIS_CARTAGE':
        return 'Davis Cartage';
      case 'PRODUCTION':
        return 'Production';
      default:
        return value;
    }
  }
}
