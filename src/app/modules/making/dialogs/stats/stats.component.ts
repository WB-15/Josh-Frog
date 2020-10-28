import { Component, Input, OnInit } from '@angular/core';
import { InventoryDetails } from '../../../../../generated/graphql';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {
  @Input() inventoryDetails: InventoryDetails;
  confidence: number;

  constructor() {}

  ngOnInit() {
    if (this.inventoryDetails.warehouseQuantityAvailable > 0) {
      const stdDevFromMean =
        (this.inventoryDetails.warehouseQuantityAvailable -
          this.inventoryDetails.warehouseWeeklyConsumptionRate) /
        Math.sqrt(this.inventoryDetails.warehouseWeeklyConsumptionVariance);
    }
  }
}
