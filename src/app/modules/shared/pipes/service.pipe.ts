import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'FEDEX_GROUND':
        return 'Ground';
      case 'FEDEX_HOME_DELIVERY':
        return 'Home Delivery';
      case 'FEDEX_EXPRESS_SAVER':
        return 'Express Saver';
      case 'FEDEX_TWO_DAY':
        return 'Two Day';
      case 'FEDEX_STANDARD_OVERNIGHT':
        return 'Standard Overnight';
      case 'FEDEX_PRIORITY_OVERNIGHT':
        return 'Priority Overnight';
      case 'FEDEX_FIRST_OVERNIGHT':
        return 'First Overnight';
      case 'FEDEX_SMART_POST':
        return 'Smart Post';
      case 'FEDEX_INTERNATIONAL_GROUND':
        return 'International Ground';
      case 'FEDEX_INTERNATIONAL_ECONOMY':
        return 'International Economy';

      case 'UPS_GROUND':
        return 'Ground';
      case 'UPS_THREE_DAY_SELECT':
        return 'Three Day Select';
      case 'UPS_SECOND_DAY_AIR':
        return 'Second Day Air';
      case 'UPS_NEXT_DAY_AIR':
        return 'Next Day Air';
      case 'UPS_NEXT_DAY_AIR_SAVER':
        return 'Next Day Air Saver';
      case 'UPS_SURE_POST':
        return 'Sure Post';
      case 'UPS_WORLDWIDE_EXPRESS':
        return 'Worldwide Express';
      case 'UPS_WORLDWIDE_EXPRESS_PLUS':
        return 'Worldwide Express Plus';
      case 'UPS_WORLDWIDE_EXPEDITED':
        return 'Worldwide Expedited';

      case 'USPS_FIRST_CLASS_MAIL':
        return 'First Class Mail';
      case 'USPS_PRIORITY_MAIL':
        return 'Priority Mail';
      case 'USPS_PRIORITY_MAIL_EXPRESS':
        return 'Priority Mail Express';
      case 'USPS_PRIORITY_MAIL_INTERNATIONAL':
        return 'Priority Mail International';
      case 'USPS_PARCEL_SELECT':
        return 'Parcel Select';

      default:
        return value;
    }
  }
}
