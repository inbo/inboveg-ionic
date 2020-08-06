import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineSurveysPage } from './offline-surveys.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineSurveysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineSurveysPageRoutingModule {}
