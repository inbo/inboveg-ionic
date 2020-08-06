import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineRecordingNewPage } from './offline-recording-new.page';

describe('OfflineRecordingNewPage', () => {
  let component: OfflineRecordingNewPage;
  let fixture: ComponentFixture<OfflineRecordingNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineRecordingNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineRecordingNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
