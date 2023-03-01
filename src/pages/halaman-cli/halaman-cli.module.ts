import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalamanCLI } from './halaman-cli';

@NgModule({
  declarations: [
    HalamanCLI,
  ],
  imports: [
    IonicPageModule.forChild(HalamanCLI),
  ],
})
export class HalamanCLIModule {}
