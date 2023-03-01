import {Component} from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
   templateUrl: 'form.html'
})
export class FormStorage {
  aksi: string;
  nama: string;
  alamat: string;
  index: number;
  parent: any;

  constructor(
    private storage: Storage,
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) { 

    this.aksi = this.navParams.get('aksi');
    this.nama = this.navParams.get('nama');
    this.alamat = this.navParams.get('alamat');
    this.index = this.navParams.get('index');
    this.parent = this.navParams.get('parent');
  }

  saveData(){
    let body = {
      nama: this.nama,
      alamat: this.alamat
    };

    if(this.aksi == 'tambah'){
      this.parent.anggota.push(body);
      this.storage.set('anggota', this.parent.anggota);
      this.viewCtrl.dismiss();
    }else if(this.aksi == 'edit'){
      this.parent.anggota[this.index] = body;
      this.storage.set('anggota', this.parent.anggota);
      this.viewCtrl.dismiss();
    }
  }

  
}