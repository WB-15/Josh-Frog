import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { ShippingAddressComponent } from './shipping-address.component';
import { FormBuilder, FormControl } from '@angular/forms';
import { StatesService } from '../../services/states.service';
import {
  ShipmentEntity,
  ShipmentUpdateAddressDocument
} from '../../../../../generated/graphql';
import {
  ApolloTestingController,
  ApolloTestingModule
} from 'apollo-angular/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogComponent } from '../dialog/dialog.component';

describe('ShippingAddressComponent', () => {
  let component: ShippingAddressComponent;
  let fixture: ComponentFixture<ShippingAddressComponent>;
  let statesService: jasmine.SpyObj<StatesService>;
  let backend: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingAddressComponent],
      providers: [FormBuilder],
      imports: [FontAwesomeModule, ApolloTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingAddressComponent);
    statesService = TestBed.inject(StatesService) as jasmine.SpyObj<
      StatesService
    >;
    backend = TestBed.inject(ApolloTestingController);

    component = fixture.componentInstance;
    component.shipment = {
      firstName: 'First',
      lastName: 'Last',
      company: null,
      line1: 'Line1',
      line2: null,
      city: 'City',
      state: 'MI',
      postalCode: '48823',
      country: 'US',
      id: 1234
    };
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    expect(component.addressForm).toBeUndefined();
    spyOn(statesService, 'getStates');
    component.ngOnInit();

    expect(component.addressForm).toBeDefined();
    expect(component.addressForm.get('firstName').value).toEqual('First');
    expect(component.addressForm.get('lastName').value).toEqual('Last');
    expect(component.addressForm.get('company').value).toEqual(null);
    expect(component.addressForm.get('line1').value).toEqual('Line1');
    expect(component.addressForm.get('line2').value).toEqual(null);
    expect(component.addressForm.get('city').value).toEqual('City');
    expect(component.addressForm.get('state').value).toEqual('MI');
    expect(component.addressForm.get('postalCode').value).toEqual('48823');
    expect(statesService.getStates).toHaveBeenCalled();
  });

  it('ngOnInit defaults null names to empty string', () => {
    component.shipment.firstName = null;
    component.shipment.lastName = null;
    component.ngOnInit();

    expect(component.addressForm.get('firstName').value).toEqual('');
    expect(component.addressForm.get('lastName').value).toEqual('');
  });

  it('updateAddress does nothing if already submitting', () => {
    component.submitting = true;
    component.updateAddress();

    backend.verify();
  });

  it('updateAddress does nothing if the form is invalid', () => {
    component.shipment.postalCode = null;
    component.ngOnInit();
    component.updateAddress();

    backend.verify();
  });

  it('updateAddress disables form and sets up data for call', () => {
    component.errorMessage = '123';
    component.ngOnInit();
    component.updateAddress();

    expect(component.submitting).toBeTrue();
    expect(component.errorMessage).toEqual('');
    expect(component.addressForm.disabled).toBeTrue();
    const call = backend.expectOne(ShipmentUpdateAddressDocument);
    expect(call.operation.variables.firstName).toEqual('First');
    expect(call.operation.variables.lastName).toEqual('Last');
    expect(call.operation.variables.company).toEqual(null);
    expect(call.operation.variables.line1).toEqual('Line1');
    expect(call.operation.variables.line2).toEqual(null);
    expect(call.operation.variables.city).toEqual('City');
    expect(call.operation.variables.state).toEqual('MI');
    expect(call.operation.variables.postalCode).toEqual('48823');
    expect(call.operation.variables.residential).toEqual(true);
    expect(call.operation.variables.country).toEqual('US');
    expect(call.operation.variables.id).toEqual(1234);

    backend.verify();
  });

  it('updateAddress succeeds', fakeAsync(() => {
    component.parentRef = TestBed.createComponent(
      DialogComponent
    ).componentInstance;
    component.callback = (shipment: ShipmentEntity) => {};
    spyOn(component, 'callback');
    spyOn(component.parentRef, 'pressOK');
    component.ngOnInit();
    component.updateAddress();
    const call = backend.expectOne((operation) => {
      expect(operation.query.definitions).toEqual(
        ShipmentUpdateAddressDocument.definitions
      );
      return true;
    });
    call.flush({
      data: {
        shipmentUpdateAddress: { id: 4321 }
      }
    });
    tick();
    expect(component.callback).toHaveBeenCalled();
    expect(component.parentRef.pressOK).toHaveBeenCalled();
    backend.verify();
  }));

  it('updateAddress succeeds with no callback', fakeAsync(() => {
    component.parentRef = TestBed.createComponent(
      DialogComponent
    ).componentInstance;
    component.ngOnInit();
    component.updateAddress();
    const call = backend.expectOne((operation) => {
      expect(operation.query.definitions).toEqual(
        ShipmentUpdateAddressDocument.definitions
      );
      return true;
    });
    call.flush({
      data: {
        shipmentUpdateAddress: { id: 4321 }
      }
    });
    tick();
    backend.verify();
  }));

  it('updateAddress handles error with a message', fakeAsync(() => {
    component.ngOnInit();
    component.updateAddress();
    const call = backend.expectOne((operation) => {
      expect(operation.query.definitions).toEqual(
        ShipmentUpdateAddressDocument.definitions
      );
      return true;
    });
    call.networkError(new Error('Please download more ram.'));
    tick();

    expect(component.submitting).toBeFalse();
    expect(component.errorMessage).toEqual('Please download more ram.');
    expect(component.addressForm.enabled).toBeTrue();
    backend.verify();
  }));

  it('updateAddress handles error without a message', fakeAsync(() => {
    component.ngOnInit();
    component.updateAddress();
    const call = backend.expectOne((operation) => {
      expect(operation.query.definitions).toEqual(
        ShipmentUpdateAddressDocument.definitions
      );
      return true;
    });
    call.networkError(new Error());
    tick();

    expect(component.submitting).toBeFalse();
    expect(component.errorMessage).toEqual(
      '{"graphQLErrors":[],"networkError":{"graphQLErrors":[],"networkError":{},"message":""},"message":""}'
    );
    expect(component.addressForm.enabled).toBeTrue();
    backend.verify();
  }));

  it('isFieldInvalid returns false for valid item', () => {
    component.ngOnInit();

    expect(component.isFieldInvalid('postalCode')).toBeFalse();
  });

  it('isFieldInvalid returns true for missing item', () => {
    component.shipment.postalCode = null;
    component.ngOnInit();
    component.addressForm.get('postalCode').markAsDirty();

    expect(component.isFieldInvalid('postalCode')).toBeTrue();
  });

  it('postalCode returns the FormControl', () => {
    component.ngOnInit();
    const formControl = component.postalCode;

    expect(formControl).toBeInstanceOf(FormControl);
  });
});
