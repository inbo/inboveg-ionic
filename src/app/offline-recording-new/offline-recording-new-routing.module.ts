import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineRecordingNewPage } from './offline-recording-new.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineRecordingNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineRecordingNewPageRoutingModule {}
