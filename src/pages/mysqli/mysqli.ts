import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { FormMysqli } from '../mysqli/form';

@Component({
   templateUrl: 'mysqli.html'
})
export class MysqliPage { 
  server: any = "http://localhost/crud/anggota.php";
  anggota: any = [];

  constructor(
    private http: Http,
    private modalCtrl: ModalController
  ) { }

  ionViewDidLoad(){
    this.http.get(this.server+"?aksi=tampil")
        .map(res => res.json())
        .subscribe(data => {

          for(let row of data.result){
            this.anggota.push(row);
          }

        });
  }

  addForm(){
    let modal = this.modalCtrl.create(FormMysqli, {
      parent: this,
      nama: "",
      alamat: "",
      id: "",
      aksi: "tambah"
    });
    modal.present();
  }

  editForm(i){
    let modal = this.modalCtrl.create(FormMysqli, {
      parent: this,
      nama: this.anggota[i].nama,
      alamat: this.anggota[i].alamat,
      id: this.anggota[i].id_anggota,
      aksi: "edit",
      index: i
    });
    modal.present();
  }

  deleteData(i){
    let body = {
      id: this.anggota[i].id_anggota
    };

    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type});
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.server+"?aksi=hapus", JSON.stringify(body), options)
    .map(res => res.json())
    .subscribe((data) =>{
      if(data.success == true){
        this.anggota.splice(i, 1);
      }
    });
  }
}