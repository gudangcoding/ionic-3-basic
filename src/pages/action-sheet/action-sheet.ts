import {Component} from '@angular/core';
import {Platform, ActionSheetController} from 'ionic-angular';

@Component({
  templateUrl: 'action-sheet.html'
})
export class ActionSheet {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheet',
      buttons: [
        {
          text: 'Hapus',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Anda klik hapus');
          }
        },
        {
          text: 'Bagikan',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Anda klik bagikan');
          }
        }
      ]
    });
    actionSheet.present()
  }
}
