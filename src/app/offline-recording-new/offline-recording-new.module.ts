import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineRecordingNewPageRoutingModule } from './offline-recording-new-routing.module';

import { OfflineRecordingNewPage } from './offline-recording-new.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OfflineRecordingNewPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [OfflineRecordingNewPage]
})
export class OfflineRecordingNewPageModule {}
