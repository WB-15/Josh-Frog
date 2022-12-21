import { Component, Input, OnInit } from '@angular/core';
import {
  InventoryDetails,
  SimpleProductEntity
} from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {
  @Input() simpleProduct: SimpleProductEntity;
  @Input() inventoryDetails: InventoryDetails;
  @Input() parentRef: DialogComponent<StatsComponent>;
  confidence: number;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.inventoryDetails.warehouseQuantityAvailable > 0) {
      const stdDevFromMean =
        (this.inventoryDetails.warehouseQuantityAvailable -
          this.inventoryDetails.warehouseWeeklyConsumptionRate) /
        Math.sqrt(this.inventoryDetails.warehouseWeeklyConsumptionVariance);
    }
  }

  routeReceiving() {
    const queryParams = { id: this.simpleProduct.id };
    this.router.navigate(['/receiving'], { queryParams });
    this.parentRef.pressOK();
  }
}
