import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakingComponent } from './making.component';

describe('MakingComponent', () => {
  let component: MakingComponent;
  let fixture: ComponentFixture<MakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
