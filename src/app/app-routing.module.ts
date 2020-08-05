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
    path: 'survey/:id/recordings',
    loadChildren: () => import('./recordings/recordings.module').then( m => m.RecordingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
