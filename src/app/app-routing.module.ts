import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'surveys',
    pathMatch: 'full'
  },
  {
    path: 'surveys',
    loadChildren: () => import('./surveys/surveys.module').then( m => m.SurveysPageModule)
  },
  {
    path: 'survey/:id',
    loadChildren: () => import('./survey-detail/survey-detail.module').then( m => m.SurveyDetailPageModule)
  },
  {
    path: 'offline/surveys',
    loadChildren: () => import('./offline-surveys/offline-surveys.module').then( m => m.OfflineSurveysPageModule)
  },
  {
    path: 'offline/survey/:id',
    loadChildren: () => import('./offline-survey/offline-survey.module').then( m => m.OfflineSurveyPageModule)
  },
  {
    path: 'offline/survey/:id/recordings',
    loadChildren: () => import('./recordings/recordings.module').then( m => m.RecordingsPageModule)
  },
  {
    path: 'offline-recording-new',
    loadChildren: () => import('./offline-recording-new/offline-recording-new.module').then( m => m.OfflineRecordingNewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
