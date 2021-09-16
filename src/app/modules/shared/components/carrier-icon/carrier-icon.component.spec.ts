import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierIconComponent } from './carrier-icon.component';

describe('ServiceIconComponent', () => {
  let component: CarrierIconComponent;
  let fixture: ComponentFixture<CarrierIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarrierIconComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
