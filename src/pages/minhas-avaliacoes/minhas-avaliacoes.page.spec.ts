import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinhasAvaliacoesPage } from './minhas-avaliacoes.page';

describe('MinhasAvaliacoesPage', () => {
  let component: MinhasAvaliacoesPage;
  let fixture: ComponentFixture<MinhasAvaliacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasAvaliacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinhasAvaliacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
