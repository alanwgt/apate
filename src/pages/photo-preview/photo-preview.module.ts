import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPreviewPage } from './photo-preview';

@NgModule({
  declarations: [
    PhotoPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoPreviewPage),
  ],
})
export class PhotoPreviewPageModule {}
