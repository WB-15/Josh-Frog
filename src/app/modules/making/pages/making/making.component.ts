import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faSpinnerThird,
  faArrowCircleUp,
  faArrowCircleDown
} from '@fortawesome/pro-duotone-svg-icons';
import {
  InventoryDetails,
  MakingStockStatusGQL
} from '../../../../../generated/graphql';
import { map } from 'rxjs/operators';
import { DialogService } from '../../../shared/services/dialog.service';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { StatsComponent } from '../../dialogs/stats/stats.component';

@Component({
  selector: 'app-making',
  templateUrl: './making.component.html',
  styles: []
})
export class MakingComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faArrowCircleDown = faArrowCircleDown;
  faArrowCircleUp = faArrowCircleUp;

  hideFullyStocked = true;

  loading = 0;

  inventoryDetails: InventoryDetails[];

  inventoryDetailsOutOfStock: InventoryDetails[];

  inventoryDetailsLessThanTwoDays: InventoryDetails[];

  inventoryDetailsLessThanOneWeek: InventoryDetails[];

  inventoryDetailsMoreThanOneWeek: InventoryDetails[];

  constructor(
    private dialogService: DialogService,
    private makingStockStatusGQL: MakingStockStatusGQL
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading++;
    this.makingStockStatusGQL
      .mutate({ warehouse: 'OWOSSO' })
      .pipe(map((result) => result.data.makingStockStatus))
      .subscribe(
        (result) => {
          this.inventoryDetails = result as InventoryDetails[];
          this.process();
          this.loading--;
          // this.changeDetectorRef.detectChanges();
        },
        (error) => {
          this.inventoryDetails = null;
          this.loading--;
          this.dialogService.showErrorMessageBox(error);
          // this.changeDetectorRef.detectChanges();
        }
      );
  }

  process() {
    this.inventoryDetailsOutOfStock = [];
    this.inventoryDetailsLessThanTwoDays = [];
    this.inventoryDetailsLessThanOneWeek = [];
    this.inventoryDetailsMoreThanOneWeek = [];
    for (const inventoryDetail of this.inventoryDetails) {
      if (inventoryDetail.warehouseRunOutDays85 <= 0) {
        this.inventoryDetailsOutOfStock = this.inventoryDetailsOutOfStock.concat(
          inventoryDetail
        );
      } else if (inventoryDetail.warehouseRunOutDays85 <= 2) {
        this.inventoryDetailsLessThanTwoDays = this.inventoryDetailsLessThanTwoDays.concat(
          inventoryDetail
        );
      } else if (inventoryDetail.warehouseRunOutDays85 <= 7) {
        this.inventoryDetailsMoreThanOneWeek = this.inventoryDetailsMoreThanOneWeek.concat(
          inventoryDetail
        );
      } else {
        this.inventoryDetailsMoreThanOneWeek = this.inventoryDetailsMoreThanOneWeek.concat(
          inventoryDetail
        );
      }
    }
    this.inventoryDetailsOutOfStock.sort(
      (a, b) =>
        b.warehouseWeeklyConsumptionRate - a.warehouseWeeklyConsumptionRate
    ); // descending
    this.inventoryDetailsLessThanTwoDays.sort(
      (a, b) => a.warehouseRunOutDays85 - b.warehouseRunOutDays85
    ); // ascending
    this.inventoryDetailsLessThanOneWeek.sort(
      (a, b) => a.warehouseRunOutDays85 - b.warehouseRunOutDays85
    ); // ascending
    this.inventoryDetailsMoreThanOneWeek.sort(
      (a, b) => a.warehouseRunOutDays85 - b.warehouseRunOutDays85
    ); // ascending
  }

  showStatsDialog(inventoryDetails: InventoryDetails) {
    const options = new DialogBoxOptions();
    options.component = StatsComponent;
    options.inputs = { inventoryDetails };
    options.title = inventoryDetails.product.title;
    this.dialogService.showDialog(options);
  }

  ngOnDestroy() {}
}
