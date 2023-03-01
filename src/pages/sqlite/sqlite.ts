import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormSqlite } from '../sqlite/form';

@Component({
   templateUrl: 'sqlite.html'
})
export class SqlitePage { 
  anggota: any = [];

  constructor(
    private sqlite: SQLite,
    private modalCtrl: ModalController
  ) { }

  ionViewDidLoad(){
    this.getData();
  }

  getData(){
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{
      db.executeSql('CREATE TABLE IF NOT EXISTS anggota(id INTEGER PRIMARY KEY, nama TEXT, alamat TEXT)', {}).then(res=> console.log('Perintah dieksekusi')).catch(e=>console.log(e));

      this.anggota = [];
      db.executeSql('SELECT * FROM anggota', {}).then(res=>{
        for(var i=0; i<res.rows.length; i++){
          this.anggota.push({id: res.rows.item(i).id, nama: res.rows.item(i).nama, alamat:res.rows.item(i).alamat});
        }
      });
    });
  }

  addForm(){
    let modal = this.modalCtrl.create(FormSqlite, {
      parent: this,
      nama: "",
      alamat: "",
      index: "",
      aksi: "tambah",
    });
    modal.present();
  }

  editForm(i){
    let modal = this.modalCtrl.create(FormSqlite, {
      parent: this,
      nama: this.anggota[i].nama,
      alamat: this.anggota[i].alamat,
      id: this.anggota[i].id,
      index: i,
      aksi: "edit",
    });
    modal.present();
  }

  deleteData(i){
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{
      db.executeSql('DELETE FROM anggota WHERE id=?', [this.anggota[i].id]).then(res=> {
        console.log(res);
        this.getData();
      }).catch(e=>console.log(e));
    });
  }
}