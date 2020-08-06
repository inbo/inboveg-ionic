import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineSurveyPageRoutingModule } from './offline-survey-routing.module';

import { OfflineSurveyPage } from './offline-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineSurveyPageRoutingModule
  ],
  declarations: [OfflineSurveyPage]
})
export class OfflineSurveyPageModule {}
