import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import {
  Carrier,
  PackageSizeInput,
  Packaging,
  RateQuote,
  Reseller,
  Service,
  ShipmentEntity,
  ShipmentRateMultiPieceGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { map } from 'rxjs/operators';

import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { DialogService } from '../../../shared/services/dialog.service';

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
  @Input() packages: PackageSizeInput[];
  @Input() callback: (
    reseller: Reseller,
    carrier: Carrier,
    service: Service,
    packaging: Packaging,
    options: string[]
  ) => void;

  loading = true;
  rateQuotes: RateQuote[];
  applyRestrictions = true;

  overnightEarlyRates: RateQuote[];
  overnightMorningRates: RateQuote[];
  overnightEveningRates: RateQuote[];
  twoDayRates: RateQuote[];
  threeDayRates: RateQuote[];
  groundRates: RateQuote[];
  economyRates: RateQuote[];

  constructor(
    private dialogService: DialogService,
    private shipmentRateMultiPieceGQL: ShipmentRateMultiPieceGQL
  ) {}

  ngOnInit() {
    this.loadMethods();
  }

  loadMethods() {
    this.overnightEarlyRates = [];
    this.overnightMorningRates = [];
    this.overnightEveningRates = [];
    this.twoDayRates = [];
    this.threeDayRates = [];
    this.groundRates = [];
    this.economyRates = [];
    this.loading = true;
    this.shipmentRateMultiPieceGQL
      .mutate({
        id: this.shipment.id,
        warehouse: this.warehouse.name,
        packaging: this.packaging,
        packages: this.packages,
        applyRestrictions: this.applyRestrictions
      })
      .pipe(map((result) => result.data.shipmentRateMultiPiece))
      .subscribe(
        (result) => {
          this.rateQuotes = result as RateQuote[];
          this.overnightEarlyRates = [];
          this.overnightMorningRates = [];
          this.overnightEveningRates = [];
          this.twoDayRates = [];
          this.threeDayRates = [];
          this.groundRates = [];
          this.economyRates = [];

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
            } else if (rate.domesticServiceType === 'PostOfficeLastMile') {
              this.economyRates.push(rate);
            }
          }
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  allOptions() {
    this.applyRestrictions = false;
    this.loadMethods();
  }

  pickMethod(
    reseller: Reseller,
    carrier: Carrier,
    service: Service,
    packaging: Packaging,
    options: string[]
  ) {
    if (this.callback) {
      this.callback(reseller, carrier, service, packaging, options);
    }
    this.parentRef.pressOK();
  }
}
