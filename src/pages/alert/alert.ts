import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'alert.html'
})
export class Alert {

  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Teman Baru!',
      message: 'Hafis menambahkan Anda sebagai teman!',
      buttons: ['Ok']
    });
    alert.present()
  }

  confirmAlert() {
    let confirm = this.alerCtrl.create({
      title: 'Persetujuan',
      message: 'Apakah Anda setuju dengan persyaratan yang diberikan?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Anda klik tidak setuju');
          }
        },
        {
          text: 'Setuju',
          handler: () => {
            console.log('Anda klik setuju');
          }
        }
      ]
    });
    confirm.present()
  }

  inputAlert() {
    let prompt = this.alerCtrl.create({
      title: 'Login',
      message: "Masukkan Nama Anda!",
      inputs: [
        {
          name: 'nama',
          placeholder: 'Nama'
        },
      ],
      buttons: [
        {
          text: 'Batal',
          handler: data => {
            console.log('Anda klik Batal');
          }
        },
        {
          text: 'Simpan',
          handler: data => {
            console.log('Anda klik Simpan');
          }
        }
      ]
    });
    prompt.present();
  }

  testCheckboxOpen: boolean;
  testCheckboxResult;

  checkboxAlert() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Bahasa Apa yang kamu gunakan?');

    alert.addInput({
      type: 'checkbox',
      label: 'Bahasa Indonesia',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bahasa Jawa',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bahasa Sunda',
      value: 'value3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}
