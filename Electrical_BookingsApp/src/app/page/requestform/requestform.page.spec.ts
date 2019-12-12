import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestformPage } from './requestform.page';

describe('RequestformPage', () => {
  let component: RequestformPage;
  let fixture: ComponentFixture<RequestformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
