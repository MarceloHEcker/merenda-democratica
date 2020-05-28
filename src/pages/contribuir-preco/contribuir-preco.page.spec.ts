import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContribuirPrecoPage } from './contribuir-preco.page';

describe('ContribuirPrecoPage', () => {
  let component: ContribuirPrecoPage;
  let fixture: ComponentFixture<ContribuirPrecoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuirPrecoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContribuirPrecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
