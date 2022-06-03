import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  WarehouseEntity,
  WarehouseListGQL
} from '../../../../generated/graphql';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouseName = 'OWOSSO';
  private warehouse: WarehouseEntity = null;

  private readonly WAREHOUSE_KEY = 'warehouse';

  userChangedSubscription: Subscription;

  private warehouseSubject$ = new BehaviorSubject<WarehouseEntity>(
    this.warehouse
  );
  public warehouseChanged$ = this.warehouseSubject$
    .asObservable()
    .pipe(shareReplay(1));
  private warehouses: WarehouseEntity[] = [];

  constructor(
    private userService: UserService,
    private warehouseListGQL: WarehouseListGQL
  ) {
    const warehouseName = localStorage.getItem(this.WAREHOUSE_KEY);
    if (warehouseName) {
      this.warehouseName = warehouseName;
    }

    this.userChangedSubscription = this.userService.userChanged$.subscribe(
      (user) => {
        if (user) {
          this.warehouseListGQL
            .fetch()
            .pipe(map((result) => result.data.warehouseList))
            .subscribe(
              (result) => {
                this.warehouses = result as WarehouseEntity[];

                for (const w of this.warehouses) {
                  if (w.name === this.warehouseName) {
                    this.warehouse = w;
                    this.warehouseSubject$.next(this.warehouse);
                  }
                }
              },
              (error) => {
                this.warehouse = null;
                this.warehouses = [];
                this.warehouseSubject$.next(this.warehouse);
              }
            );
        } else {
          this.warehouse = null;
          this.warehouses = [];
          this.warehouseSubject$.next(this.warehouse);
        }
      }
    );
  }

  public getWarehouses(): WarehouseEntity[] {
    return this.warehouses;
  }

  public setWarehouse(warehouse: WarehouseEntity): void {
    for (const w of this.warehouses) {
      if (w.name === warehouse.name) {
        this.warehouse = w;
        this.warehouseName = w.name;
        this.warehouseSubject$.next(this.warehouse);
        localStorage.setItem(this.WAREHOUSE_KEY, this.warehouseName);
      }
    }
  }
}
