import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineRecordingDraftsPageRoutingModule } from './offline-recording-drafts-routing.module';

import { OfflineRecordingDraftsPage } from './offline-recording-drafts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineRecordingDraftsPageRoutingModule
  ],
  declarations: [OfflineRecordingDraftsPage]
})
export class OfflineRecordingDraftsPageModule {}
