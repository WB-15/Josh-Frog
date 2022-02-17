import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  ShipmentEntity,
  ShipmentUpdateAddressGQL
} from '../../../../../generated/graphql';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatesService } from '../../services/states.service';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styles: []
})
export class ShippingAddressComponent implements OnInit {
  @Input() shipment: ShipmentEntity;
  @Input() callback: (shipment: ShipmentEntity) => void;
  @Input() parentRef: DialogComponent<ShippingAddressComponent>;
  submitting = false;
  addressForm: FormGroup;
  states;
  faAngleDown = faAngleDown;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private statesService: StatesService,
    private shipmentUpdateAddressGQL: ShipmentUpdateAddressGQL
  ) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      firstName: [{ value: this.shipment.firstName || '', disabled: false }],
      lastName: [{ value: this.shipment.lastName || '', disabled: false }],
      company: [{ value: this.shipment.company, disabled: false }],
      line1: [
        { value: this.shipment.line1, disabled: false },
        [Validators.required]
      ],
      line2: [{ value: this.shipment.line2, disabled: false }],
      city: [
        { value: this.shipment.city, disabled: false },
        [Validators.required]
      ],
      state: [
        { value: this.shipment.state, disabled: false },
        [Validators.required]
      ],
      postalCode: [
        {
          value: this.shipment.postalCode,
          disabled: false
        },
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
      ]
    });

    this.states = this.statesService.getStates();
  }

  updateAddress() {
    if (!this.submitting && this.addressForm.valid) {
      this.addressForm.disable();
      this.errorMessage = '';
      this.submitting = true;
      const address = this.addressForm.value;
      address.id = this.shipment.id;
      address.residential = true;
      // TODO: add support for other countries
      address.country = this.shipment.country;
      this.shipmentUpdateAddressGQL
        .mutate(address)
        .pipe(map((result) => result.data.shipmentUpdateAddress))
        .subscribe(
          (result) => {
            if (this.callback) {
              this.callback(result as ShipmentEntity);
            }
            this.parentRef.pressOK();
          },
          (error) => {
            this.errorMessage = error.message
              ? error.message
              : JSON.stringify(error);
            this.addressForm.enable();
            this.submitting = false;
          }
        );
    }
  }

  isFieldInvalid(field: string) {
    const formField = this.addressForm.get(field);
    return formField.invalid && formField.dirty;
  }

  get postalCode() {
    return this.addressForm.get('postalCode');
  }
}
