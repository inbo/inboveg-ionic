import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordingsPage } from './recordings.page';

describe('RecordingsPage', () => {
  let component: RecordingsPage;
  let fixture: ComponentFixture<RecordingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
