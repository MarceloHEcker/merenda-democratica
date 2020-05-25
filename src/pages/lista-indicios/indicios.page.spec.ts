import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiciosPage } from './indicios.page';

describe('IndiciosPage', () => {
  let component: IndiciosPage;
  let fixture: ComponentFixture<IndiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
