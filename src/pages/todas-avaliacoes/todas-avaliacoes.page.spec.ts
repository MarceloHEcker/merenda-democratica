import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodasAvaliacoesPage } from './todas-avaliacoes.page';

describe('TodasAvaliacoesPage', () => {
  let component: TodasAvaliacoesPage;
  let fixture: ComponentFixture<TodasAvaliacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasAvaliacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodasAvaliacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
