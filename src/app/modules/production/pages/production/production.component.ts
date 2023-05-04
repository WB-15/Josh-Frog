import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  faSpinnerThird,
  faArrowCircleUp,
  faArrowCircleDown,
  faAngleDown
} from '@fortawesome/pro-duotone-svg-icons';
import {
  InventoryDetails,
  MakingStockStatusGQL,
  WarehouseEntity,
  TeamEntity,
  DepartmentEntity
} from '../../../../../generated/graphql';

import { DialogService } from '../../../shared/services/dialog.service';
import { DialogBoxOptions } from '../../../shared/components/dialog/dialog.component';
import { StatsComponent } from '../../dialogs/stats/stats.component';
import { WarehouseService } from '../../../shared/services/warehouse.service';
import { TeamService } from 'src/app/modules/shared/services/team.service';
import { DepartmentService } from 'src/app/modules/shared/services/department.service';
import internal from 'events';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styles: []
})
export class ProductionComponent implements OnInit, OnDestroy {
  faSpinnerThird = faSpinnerThird;
  faArrowCircleDown = faArrowCircleDown;
  faArrowCircleUp = faArrowCircleUp;
  faAngleDown = faAngleDown;

  hideFullyStocked = true;

  warehouse: WarehouseEntity = null;
  warehouseChangedSubscription: Subscription;

  // team : TeamEntity;
  // teams : TeamEntity[];
  // defaultTeam = 'plants'

  department: DepartmentEntity;
  departments: DepartmentEntity[];
  defaultDepartment = 'plants'

  loading = 0;

  inventoryDetails: InventoryDetails[];

  inventoryDetailsOutOfStock: InventoryDetails[];

  inventoryDetailsLessThanTwoDays: InventoryDetails[];

  inventoryDetailsLessThanOneWeek: InventoryDetails[];

  inventoryDetailsMoreThanOneWeek: InventoryDetails[];


  // teamsChangedSubscription: Subscription;


  departmentsChangedSubscription: Subscription;

  constructor(
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private makingStockStatusGQL: MakingStockStatusGQL,

    // private teamService: TeamService,

    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        this.warehouse = warehouse;

        // this.teamsChangedSubscription = this.teamService.teamsChanged$.subscribe((teams) => {
        //   if(teams){
        //     console.log(teams);
        //     this.teams = teams
        //     this.team = this.teams.find(team => team.slug == this.defaultTeam);
        //     console.log('defaultTeam!@!@!@!@!@!@!@!@!@', this.team)
        //   }
        // });

        this.departmentsChangedSubscription = this.departmentService.departmentsChanged$.subscribe((departments) => {
          if(departments){
            console.log("departments:::", departments);
            this.departments = departments
            this.department = this.departments.find(department => department.slug == this.defaultDepartment);
            console.log('defaultDepartment!@!@!@!@!@!@!@!@!@', this.department)
          }
        });
        this.reload();
      },
      (error) => {
        this.warehouse = null;
      }
    );
  }

  reload() {
    console.log("reload~~~~~~~~~~~~~~~~", this.department, this.warehouse)
    this.loading++;
    this.makingStockStatusGQL

      // .mutate({ department: this.team.slug, warehouse: this.warehouse.name })

      .mutate({ department: this.department.slug, warehouse: this.warehouse.name })
      .pipe(map((result) => result.data.makingStockStatus))
      .subscribe(
        (result) => {
          console.log("Production LIST~~~~~~~~~", result)
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
        this.inventoryDetailsLessThanOneWeek = this.inventoryDetailsLessThanOneWeek.concat(
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
    options.inputs = {
      simpleProduct: inventoryDetails.product,
      inventoryDetails
    };
    options.title = inventoryDetails.product.title;
    this.dialogService.showDialog(options);
  }

  ngOnDestroy() {
    this.warehouseChangedSubscription.unsubscribe();
  }
}
