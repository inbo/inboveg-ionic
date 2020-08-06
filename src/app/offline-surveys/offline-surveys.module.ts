import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineSurveysPageRoutingModule } from './offline-surveys-routing.module';

import { OfflineSurveysPage } from './offline-surveys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflineSurveysPageRoutingModule
  ],
  declarations: [OfflineSurveysPage]
})
export class OfflineSurveysPageModule {}
