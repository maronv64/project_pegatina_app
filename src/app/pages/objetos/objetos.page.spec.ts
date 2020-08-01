import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetosPage } from './objetos.page';

describe('ObjetosPage', () => {
  let component: ObjetosPage;
  let fixture: ComponentFixture<ObjetosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
