import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import {
  Carrier,
  DomesticServiceType,
  Packaging,
  RateQuote,
  Service,
  ShipmentEntity,
  ShipmentRateGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { map } from 'rxjs/operators';

import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styles: []
})
export class MethodComponent implements OnInit {
  faSpinnerThird = faSpinnerThird;

  @Input() parentRef: DialogComponent<MethodComponent>;
  @Input() shipment: ShipmentEntity;
  @Input() warehouse: WarehouseEntity;
  @Input() packaging: Packaging;
  @Input() length: number;
  @Input() width: number;
  @Input() height: number;
  @Input() weight: number;
  @Input() callback: (
    carrier: Carrier,
    service: Service,
    packaging: Packaging,
    options: string[]
  ) => void;

  loading = true;
  rateQuotes: RateQuote[];

  overnightEarlyRates: RateQuote[];
  overnightMorningRates: RateQuote[];
  overnightEveningRates: RateQuote[];
  twoDayRates: RateQuote[];
  threeDayRates: RateQuote[];
  groundRates: RateQuote[];

  constructor(private shipmentRateGQL: ShipmentRateGQL) {}

  ngOnInit() {
    this.loadMethods();
  }

  loadMethods() {
    this.shipmentRateGQL
      .mutate({
        id: this.shipment.id,
        warehouse: this.warehouse.name,
        packaging: this.packaging,
        weight: this.weight ? this.weight : this.shipment.estimatedWeight,
        length: this.length ? this.length : this.shipment.estimatedLength,
        width: this.width ? this.width : this.shipment.estimatedWidth,
        height: this.height ? this.height : this.shipment.estimatedHeight
      })
      .pipe(map((result) => result.data.shipmentRate))
      .subscribe(
        (result) => {
          /*
          this.rateQuotes = [
            {
              domesticServiceType: DomesticServiceType.Ground,
              carrier: Carrier.Usps,
              service: Service.UspsPriorityMail,
              packaging: Packaging.CardboardBox,
              cost: 7.67,
              shipDate: 'Tue Sep 07 00:00:00 EDT 2021',
              deliveryDate: 'Thu Sep 09 00:00:00 EDT 2021'
            },
            {
              domesticServiceType: DomesticServiceType.Ground,
              carrier: Carrier.Usps,
              service: Service.UspsPriorityMail,
              packaging: Packaging.RegionalBoxA,
              cost: 8.34,
              shipDate: 'Tue Sep 07 00:00:00 EDT 2021',
              deliveryDate: 'Thu Sep 09 00:00:00 EDT 2021'
            },
            {
              domesticServiceType: DomesticServiceType.Ground,
              carrier: Carrier.Usps,
              service: Service.UspsPriorityMail,
              packaging: Packaging.RegionalBoxB,
              cost: 9.56,
              shipDate: 'Tue Sep 07 00:00:00 EDT 2021',
              deliveryDate: 'Thu Sep 09 00:00:00 EDT 2021'
            },
            {
              domesticServiceType: DomesticServiceType.Ground,
              carrier: Carrier.Usps,
              service: Service.UspsParcelSelect,
              packaging: Packaging.CardboardBox,
              cost: 7.52,
              shipDate: 'Tue Sep 07 00:00:00 EDT 2021',
              deliveryDate: 'Mon Sep 13 00:00:00 EDT 2021'
            }
          ];
          */

          this.rateQuotes = result as RateQuote[];
          this.overnightEarlyRates = [];
          this.overnightMorningRates = [];
          this.overnightEveningRates = [];
          this.twoDayRates = [];
          this.threeDayRates = [];
          this.groundRates = [];
          for (const rate of this.rateQuotes) {
            if (rate.domesticServiceType === 'OvernightEarly') {
              this.overnightEarlyRates.push(rate);
            } else if (rate.domesticServiceType === 'OvernightMorning') {
              this.overnightMorningRates.push(rate);
            } else if (rate.domesticServiceType === 'OvernightEvening') {
              this.overnightEveningRates.push(rate);
            } else if (rate.domesticServiceType === 'TwoDay') {
              this.twoDayRates.push(rate);
            } else if (rate.domesticServiceType === 'ThreeDay') {
              this.threeDayRates.push(rate);
            } else if (rate.domesticServiceType === 'Ground') {
              this.groundRates.push(rate);
            }
          }
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  pickMethod(
    carrier: Carrier,
    service: Service,
    packaging: Packaging,
    options: string[]
  ) {
    if (this.callback) {
      this.callback(carrier, service, packaging, options);
    }
    this.parentRef.pressOK();
  }
}
