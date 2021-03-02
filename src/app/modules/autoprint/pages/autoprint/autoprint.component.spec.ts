import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoprintComponent } from './autoprint.component';

describe('AutoprintComponent', () => {
  let component: AutoprintComponent;
  let fixture: ComponentFixture<AutoprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoprintComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
