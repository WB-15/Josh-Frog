import { Component, Input, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import {
  LineItemInput,
  ShipmentEntity,
  ShipmentSplitGQL
} from '../../../../../generated/graphql';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-split-shipment',
  templateUrl: './split-shipment.component.html',
  styles: ['']
})
export class SplitShipmentComponent implements OnInit {
  @Input() shipment: ShipmentEntity;
  @Input() callback: (shipment: ShipmentEntity) => void;
  @Input() parentRef: DialogComponent<SplitShipmentComponent>;
  currentShipmentQuantities: number[] = [];
  newShipmentQuantities: number[] = [];
  submitting = false;

  constructor(private shipmentSplitGQL: ShipmentSplitGQL) {}

  ngOnInit(): void {
    for (const shipmentItem of this.shipment.shipmentItems) {
      this.currentShipmentQuantities.push(shipmentItem.quantity);
      this.newShipmentQuantities.push(0);
    }
  }

  setCurrentQuantity(index: number, quantity?: number): void {
    if (quantity) {
      this.currentShipmentQuantities[index] = quantity;
    }
    this.currentShipmentQuantities[index] = Math.max(
      Math.min(
        this.currentShipmentQuantities[index],
        this.shipment.shipmentItems[index].quantity
      ),
      0
    );
    this.newShipmentQuantities[index] =
      this.shipment.shipmentItems[index].quantity -
      this.currentShipmentQuantities[index];
  }

  setNewQuantity(index: number, quantity?: number): void {
    if (quantity) {
      this.newShipmentQuantities[index] = quantity;
    }
    this.newShipmentQuantities[index] = Math.max(
      Math.min(
        this.newShipmentQuantities[index],
        this.shipment.shipmentItems[index].quantity
      ),
      0
    );
    this.currentShipmentQuantities[index] =
      this.shipment.shipmentItems[index].quantity -
      this.newShipmentQuantities[index];
  }

  splitShipment(): void {
    this.submitting = true;
    const lineItems: LineItemInput[] = [];
    let i = 0;
    for (const shipmentItem of this.shipment.shipmentItems) {
      if (this.newShipmentQuantities[i] > 0) {
        const lineItem: LineItemInput = {
          id: shipmentItem.id,
          quantity: this.newShipmentQuantities[i]
        };
        lineItems.push(lineItem);
      }
      i++;
    }
    this.shipmentSplitGQL
      .mutate({
        id: this.shipment.id,
        lineItems,
        reroute: false
      })
      .pipe(map((result) => result.data.shipmentSplit))
      .subscribe(
        (result) => {
          this.submitting = false;
          if (this.callback) {
            this.callback(result);
          }
          this.parentRef.pressOK();
        },
        (error) => {
          // TODO: before this feature is fully merged and approved, we need to do better error handling
          this.submitting = false;
          console.log(error);
        }
      );
    this.parentRef.pressOK();
  }
}

export interface ShipmentSplitDialogInputs {
  shipment: ShipmentEntity;
}
