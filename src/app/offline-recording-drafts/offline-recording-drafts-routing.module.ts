import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineRecordingDraftsPage } from './offline-recording-drafts.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineRecordingDraftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineRecordingDraftsPageRoutingModule {}
