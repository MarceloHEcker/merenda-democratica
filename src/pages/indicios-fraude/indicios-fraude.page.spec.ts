import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiciosFraudePage } from './indicios-fraude.page';

describe('IndiciosFraudePage', () => {
  let component: IndiciosFraudePage;
  let fixture: ComponentFixture<IndiciosFraudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiciosFraudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiciosFraudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
