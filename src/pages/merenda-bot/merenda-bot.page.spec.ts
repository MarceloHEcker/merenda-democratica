import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerendaBotPage } from './merenda-bot.page';

describe('MerendaBotPage', () => {
  let component: MerendaBotPage;
  let fixture: ComponentFixture<MerendaBotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerendaBotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerendaBotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
