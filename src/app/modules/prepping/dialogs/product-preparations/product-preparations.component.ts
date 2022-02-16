import { Component, Input } from '@angular/core';
import {
  PreparationSummary,
  PreppedProductsAddPreparationGQL,
  PreppedProductsRemovePreparationGQL,
  WarehouseEntity
} from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { map } from 'rxjs/operators';
import { DialogService } from '../../../shared/services/dialog.service';
import { isNumeric } from 'rxjs/internal-compatibility';
import { faPlusCircle } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-product-preparations',
  templateUrl: './product-preparations.component.html',
  styleUrls: ['./product-preparations.component.scss']
})
export class ProductPreparationsComponent {
  @Input() preparationSummary: PreparationSummary;
  @Input() warehouse: WarehouseEntity;
  @Input() callback: () => void;
  @Input() parentRef: DialogComponent<ProductPreparationsComponent>;

  quantity: number;
  submitting = false;
  deleting: string;

  faPlusCircle = faPlusCircle;
  math = Math;

  constructor(
    private preppedProductsAddPreparationGQL: PreppedProductsAddPreparationGQL,
    private preppedProductsRemovePreparationGQL: PreppedProductsRemovePreparationGQL,
    private dialogService: DialogService
  ) {}

  addPrep() {
    this.submitting = true;
    this.preppedProductsAddPreparationGQL
      .mutate({
        warehouse: this.warehouse.name,
        productId: this.preparationSummary.simpleProduct.id,
        quantity: this.quantity
      })
      .pipe(map((result) => result.data.preppedProductsAddPreparation))
      .subscribe(
        (result) => {
          this.preparationSummary = result;
          if (this.callback) {
            this.callback();
          }
          // this.parentRef.pressOK();
          this.submitting = false;
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
          this.submitting = false;
        }
      );
  }

  removePrep(prepId: string) {
    this.deleting = prepId;
    this.preppedProductsRemovePreparationGQL
      .mutate({
        warehouse: this.warehouse.name,
        productId: this.preparationSummary.simpleProduct.id,
        preparationId: prepId
      })
      .pipe(map((result) => result.data.preppedProductsRemovePreparation))
      .subscribe(
        (result) => {
          this.preparationSummary = result;
          if (this.callback) {
            this.callback();
          }
          // this.parentRef.pressOK();
          this.deleting = null;
        },
        (error) => {
          this.dialogService.showErrorMessageBox(error);
          this.deleting = null;
        }
      );
  }

  addToQuantity(amount: number) {
    if (isNumeric(this.quantity)) {
      this.quantity += amount;
    } else {
      this.quantity = amount;
    }
  }
}
