import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarCompraPage } from './comentar-compra.page';

describe('ComentarCompraPage', () => {
  let component: ComentarCompraPage;
  let fixture: ComponentFixture<ComentarCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
