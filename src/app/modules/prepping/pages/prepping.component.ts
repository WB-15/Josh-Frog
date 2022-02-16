import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  DepartmentEntity,
  PreparationSummary,
  PreppedProductsListGQL,
  WarehouseEntity
} from '../../../../generated/graphql';
import { map } from 'rxjs/operators';
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { faAngleDown, faAngleRight } from '@fortawesome/pro-regular-svg-icons';
import { DialogService } from '../../shared/services/dialog.service';
import { WarehouseService } from '../../shared/services/warehouse.service';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../shared/services/department.service';
import { QueryOptionsAlone } from 'apollo-angular/types';
import { DialogBoxOptions } from '../../shared/components/dialog/dialog.component';
import { ProductPreparationsComponent } from '../dialogs/product-preparations/product-preparations.component';

@Component({
  selector: 'app-prepping',
  templateUrl: './prepping.component.html',
  styleUrls: ['./prepping.component.scss']
})
export class PreppingComponent implements OnInit, OnDestroy {
  warehouse: WarehouseEntity;
  department: DepartmentEntity;

  preparationSummary: PreparationSummary[];
  needPrepped: PreparationSummary[];
  fullyPrepped: PreparationSummary[];
  departments: DepartmentEntity[];

  fullyPreppedOpen = false;
  needPreppedOpen = true;
  defaultDepartment = 'insects'; //Todo: Have a way to save this locally by user
  loading = true;
  submitting = 0;

  math = Math;
  faSpinnerThird = faSpinnerThird;
  faAngleDown = faAngleDown;
  faAngleRight = faAngleRight;
  warehouseChangedSubscription: Subscription;
  departmentsChangedSubscription: Subscription;

  constructor(
    private departmentService: DepartmentService,
    private dialogService: DialogService,
    private warehouseService: WarehouseService,
    private preppedProductsListGQL: PreppedProductsListGQL
  ) {}

  ngOnInit() {
    this.warehouseChangedSubscription = this.warehouseService.warehouseChanged$.subscribe(
      (warehouse) => {
        if (warehouse) {
          this.warehouse = warehouse;
          if (this.departments) {
            this.loading = false;
            this.loadPreppedProducts();
          }
        }
      },
      (error) => {
        this.warehouse = null;
      }
    );

    this.departmentsChangedSubscription = this.departmentService.departmentsChanged$.subscribe((departments) => {
      if (departments) {
        this.departments = [...departments].sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (b.name < a.name) {
            return 1;
          }
          return 0;
        });
        this.department = this.departments.find(department => department.slug === this.defaultDepartment);
        if (this.warehouse) {
          this.loading = false;
          this.loadPreppedProducts();
        }
      }
    });
  }

  loadPreppedProducts() {
    this.preparationSummary = null;
    this.needPrepped = null;
    this.fullyPrepped = null;
    this.submitting++;
    this.preppedProductsListGQL
      .fetch({
        department: this.department.slug,
        warehouse: this.warehouse.name
      }, { fetchPolicy: 'network-only' } as QueryOptionsAlone<any>)
      .pipe(map((result) => result.data.preppedProductsList))
      .subscribe(
        (result) => {
          this.preparationSummary = [...result].sort(function(a, b) {
            if (a.quantityNeeded > b.quantityNeeded) {
              return -1;
            }
            if (b.quantityNeeded > a.quantityNeeded) {
              return 1;
            }
            return 0;
          });

          const index = this.preparationSummary.findIndex(prep => prep.quantityNeeded === 0);
          if (index > -1) {
            this.fullyPrepped = this.preparationSummary.slice(index);
          }
          this.needPrepped = this.preparationSummary.slice(0, index);

          this.submitting--;
        },
        (error) => {
          this.preparationSummary = null;
          this.needPrepped = null;
          this.fullyPrepped = null;
          this.submitting--;
          this.dialogService.showErrorMessageBox(error);
        }
      );
  }

  showPreparationDialog(preparationSummary: PreparationSummary) {
    const options = new DialogBoxOptions();
    options.component = ProductPreparationsComponent;
    options.inputs = {
      preparationSummary: preparationSummary,
      warehouse: this.warehouse,
      callback: () => {
        this.loadPreppedProducts();
      }
    };
    options.title = 'Product Preparations';
    options.okText = 'Close';
    this.dialogService.showDialog(options);
  }

  ngOnDestroy() {
    this.warehouseChangedSubscription.unsubscribe();
    this.departmentsChangedSubscription.unsubscribe();
  }
}
