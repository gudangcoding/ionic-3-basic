import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'toast.html'
})
export class Toast {
  constructor(public toastCtrl: ToastController) { }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToastWithCloseButton(){
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
