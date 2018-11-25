import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrophiesPage } from './trophies';

@NgModule({
  declarations: [
    TrophiesPage,
  ],
  imports: [
    IonicPageModule.forChild(TrophiesPage),
  ],
})
export class TrophiesPageModule {}
