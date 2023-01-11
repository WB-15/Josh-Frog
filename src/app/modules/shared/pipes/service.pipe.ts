import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../../../../generated/graphql';

@Pipe({
  name: 'service'
})
export class ServicePipe implements PipeTransform {
  transform(value: Service, ...args: unknown[]): string {
    switch (value) {
      case Service.GenericGround:
        return 'Ground';
      case Service.GenericOvernight:
        return 'Overnight';
      case Service.GenericTwoDay:
        return 'Two Day';

      case Service.FedexGround:
        return 'Ground';
      case Service.FedexHomeDelivery:
        return 'Home Delivery';
      case Service.FedexExpressSaver:
        return 'Express Saver';
      case Service.FedexTwoDay:
        return 'Two Day';
      case Service.FedexStandardOvernight:
        return 'Standard Overnight';
      case Service.FedexPriorityOvernight:
        return 'Priority Overnight';
      case Service.FedexFirstOvernight:
        return 'First Overnight';
      case Service.FedexSmartPost:
        return 'Smart Post';
      case Service.FedexInternationalGround:
        return 'International Ground';
      case Service.FedexInternationalEconomy:
        return 'International Economy';

      case Service.UpsGround:
        return 'Ground';
      case Service.UpsThreeDaySelect:
        return 'Three Day Select';
      case Service.UpsSecondDayAir:
        return 'Second Day Air';
      case Service.UpsNextDayAir:
        return 'Next Day Air';
      case Service.UpsNextDayAirSaver:
        return 'Next Day Air Saver';
      case Service.UpsSurePost:
        return 'Sure Post';
      case Service.UpsWorldwideExpress:
        return 'Worldwide Express';
      case Service.UpsWorldwideExpressPlus:
        return 'Worldwide Express Plus';
      case Service.UpsWorldwideExpedited:
        return 'Worldwide Expedited';

      case Service.UspsFirstClassMail:
        return 'First Class Mail';
      case Service.UspsPriorityMail:
        return 'Priority Mail';
      case Service.UspsPriorityMailExpress:
        return 'Priority Mail Express';
      case Service.UspsPriorityMailInternational:
        return 'Priority Mail International';
      case Service.UspsParcelSelect:
        return 'Parcel Select';
      case Service.UspsParcelSelectLightweight:
        return 'Parcel Select Lightweight';

      case Service.LasershipGround:
        return 'LaserShip Ground';

      case Service.RoadieSameDay:
        return 'Roadie Same-Day';
      case Service.RoadieNextDay:
        return 'Roadie Next Day';
      case Service.RoadieTwoDay:
        return 'Roadie Two Day';

      case Service.GlobaltranzLtl:
        return 'GlobalTranz LTL';
      case Service.GlobaltranzLtlLiftgate:
        return 'GlobalTranz LTL Liftgate';
      case Service.GlobaltranzLtlTradeshow:
        return 'GlobalTranz LTL Tradeshow';

      default:
        return value;
    }
  }
}
