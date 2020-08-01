import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetoPage } from './objeto.page';

describe('ObjetoPage', () => {
  let component: ObjetoPage;
  let fixture: ComponentFixture<ObjetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
