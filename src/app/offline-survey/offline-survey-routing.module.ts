import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineSurveyPage } from './offline-survey.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineSurveyPageRoutingModule {}
