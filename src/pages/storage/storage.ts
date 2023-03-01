import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FormStorage } from '../storage/form';

@Component({
   templateUrl: 'storage.html'
})
export class StoragePage { 
  anggota: any = [];

  constructor(
    private storage: Storage,
    private modalCtrl: ModalController
  ) { 
    this.storage.get('anggota').then((data)=>{
      if(data==undefined) this.anggota = [];
      else this.anggota = data;
    });
  }

  addForm(){
    let modal = this.modalCtrl.create(FormStorage, {
      parent: this,
      nama: "",
      alamat: "",
      aksi: "tambah",
      index: ""
    });
    modal.present();
  }

  editForm(i){
    let modal = this.modalCtrl.create(FormStorage, {
      parent: this,
      nama: this.anggota[i].nama,
      alamat: this.anggota[i].alamat,
      aksi: "edit",
      index: i
    });
    modal.present();
  }

  deleteData(i){
    this.anggota.splice(i, 1);
    this.storage.set('anggota', this.anggota);
  }
}