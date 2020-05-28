import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvaliarCompraPage } from './avaliar-compra.page';

describe('AvaliarCompraPage', () => {
  let component: AvaliarCompraPage;
  let fixture: ComponentFixture<AvaliarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvaliarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
