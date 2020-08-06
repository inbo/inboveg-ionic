import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineSurveysPage } from './offline-surveys.page';

describe('OfflineSurveysPage', () => {
  let component: OfflineSurveysPage;
  let fixture: ComponentFixture<OfflineSurveysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineSurveysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineSurveysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
