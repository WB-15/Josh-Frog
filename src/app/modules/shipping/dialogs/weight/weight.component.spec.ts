import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeightComponent } from './weight.component';

describe('WeightComponent', () => {
  let component: WeightComponent;
  let fixture: ComponentFixture<WeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
