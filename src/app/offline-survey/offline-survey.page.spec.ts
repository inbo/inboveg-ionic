import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineSurveyPage } from './offline-survey.page';

describe('OfflineSurveyPage', () => {
  let component: OfflineSurveyPage;
  let fixture: ComponentFixture<OfflineSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
