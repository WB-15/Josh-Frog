import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import {
  Carrier,
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
        weight: this.weight ? this.weight : this.shipment.estimatedWeight,
        length: this.length ? this.length : this.shipment.estimatedLength,
        width: this.width ? this.width : this.shipment.estimatedWidth,
        height: this.height ? this.height : this.shipment.estimatedHeight
      })
      .pipe(map((result) => result.data.shipmentRate))
      .subscribe(
        (result) => {
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
