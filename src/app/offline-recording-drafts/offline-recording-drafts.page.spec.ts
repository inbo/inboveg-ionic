import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineRecordingDraftsPage } from './offline-recording-drafts.page';

describe('OfflineRecordingDraftsPage', () => {
  let component: OfflineRecordingDraftsPage;
  let fixture: ComponentFixture<OfflineRecordingDraftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineRecordingDraftsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineRecordingDraftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
