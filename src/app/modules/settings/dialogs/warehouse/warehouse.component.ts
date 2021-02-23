import { Component, OnDestroy, OnInit } from '@angular/core';
import { WarehouseEntity } from '../../../../../generated/graphql';
import { WarehouseService } from '../../../shared/services/warehouse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styles: []
})
export class WarehouseComponent implements OnInit, OnDestroy {
  public warehouses: WarehouseEntity[];
  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;
        this.warehouses = this.warehouseService.getWarehouses();
      },
      (error) => {
        this.warehouse = null;
        this.warehouses = [];
      }
    );
  }

  setWarehouse(warehouse: WarehouseEntity) {
    this.warehouseService.setWarehouse(warehouse);
  }

  ngOnDestroy() {
    this.warehouseChangedSubscription.unsubscribe();
  }
}
