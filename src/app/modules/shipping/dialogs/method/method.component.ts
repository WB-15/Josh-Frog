import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { map } from 'rxjs/operators';
import {
  Carrier,
  PackageSizeInput,
  Packaging,
  RateQuote,
  RateQuoteFitness,
  Reseller,
  Service,
  ShipmentEntity,
  ShipmentRateMultiPieceGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
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
  showResellers = true;

  constructor(
    private dialogService: DialogService,
    private shipmentRateMultiPieceGQL: ShipmentRateMultiPieceGQL,
    private changeDetectorRef: ChangeDetectorRef
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
          this.overnightEarlyRates.sort(this.sortRates);
          this.overnightMorningRates.sort(this.sortRates);
          this.overnightEveningRates.sort(this.sortRates);
          this.twoDayRates.sort(this.sortRates);
          this.threeDayRates.sort(this.sortRates);
          this.groundRates.sort(this.sortRates);
          this.economyRates.sort(this.sortRates);

          this.loading = false;
          this.changeDetectorRef.detectChanges();
          document?.getElementById('best')?.focus();
        },
        (error) => {
          console.log(error);
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  sortRates = (a: RateQuote, b: RateQuote) => {
    if (a.fitness === b.fitness) {
      return a.cost - b.cost;
    } else {
      return this.getFitnessOrder(a.fitness) - this.getFitnessOrder(b.fitness);
    }
  };

  getFitnessOrder(rateQuoteFitness: RateQuoteFitness) {
    switch (rateQuoteFitness) {
      case RateQuoteFitness.Best:
        return 1;
      case RateQuoteFitness.Good:
        return 2;
      case RateQuoteFitness.Neutral:
        return 3;
      case RateQuoteFitness.Bad:
        return 4;
    }
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
