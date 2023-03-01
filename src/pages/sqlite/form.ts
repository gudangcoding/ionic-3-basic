import {Component} from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
   templateUrl: 'form.html'
})
export class FormSqlite {
  aksi: string;
  nama: string;
  alamat: string;
  id: number;
  index: number;
  parent: any;

  constructor(
    private sqlite: SQLite,
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) { 

    this.aksi = this.navParams.get('aksi');
    this.nama = this.navParams.get('nama');
    this.alamat = this.navParams.get('alamat');
    this.id = this.navParams.get('id');
    this.index = this.navParams.get('index');
    this.parent = this.navParams.get('parent');
  }

  saveData(){
    if(this.aksi == 'tambah'){
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db:SQLiteObject)=>{
        db.executeSql('INSERT INTO anggota VALUES(NULL, ?, ?)', [this.nama, this.alamat]).then(res=> {
          console.log(res);
          this.parent.getData();
          this.viewCtrl.dismiss();
        }).catch(e=>console.log(e));
      });
    }else if(this.aksi == 'edit'){
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db:SQLiteObject)=>{
        db.executeSql('UPDATE anggota SET nama=?, alamat=? WHERE id=?', [this.nama, this.alamat, this.id]).then(res=> {
          console.log(res);
          this.parent.getData();
          this.viewCtrl.dismiss();
        }).catch(e=>console.log(e));
      });

    }
  }
  
}