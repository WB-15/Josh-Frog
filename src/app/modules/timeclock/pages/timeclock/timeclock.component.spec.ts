import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimeclockComponent } from './timeclock.component';

describe('TimeclockComponent', () => {
  let component: TimeclockComponent;
  let fixture: ComponentFixture<TimeclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeclockComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
