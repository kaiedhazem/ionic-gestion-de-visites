import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendrierPage } from './calendrier';

@NgModule({
  declarations: [
    CalendrierPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendrierPage),
  ],
})
export class CalendrierPageModule {}
