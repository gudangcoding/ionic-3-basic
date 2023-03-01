import {Component} from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
   templateUrl: 'form.html'
})
export class FormMysqli {
  server: any = "http://localhost/crud/anggota.php";
  aksi: string;
  nama: string;
  alamat: string;
  id: number;
  index: number;
  parent: any;

  constructor(
    private http: Http,
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
    let body = {
      nama: this.nama,
      alamat: this.alamat,
      id: this.id
    };

    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type});
    let options = new RequestOptions({ headers: headers });

    if(this.aksi == 'tambah'){
      this.http.post(this.server+"?aksi=tambah", JSON.stringify(body), options)
      .map(res => res.json())
      .subscribe((data) =>{
        if(data.success == true){
          this.parent.anggota.push(data.result);
          this.viewCtrl.dismiss();
        }
      });
    }else if(this.aksi == 'edit'){
      this.http.post(this.server+"?aksi=edit", JSON.stringify(body), options)
      .map(res => res.json())
      .subscribe((data) =>{
        if(data.success == true){
          this.parent.anggota[this.index] = data.result;
          this.viewCtrl.dismiss();
        }
      });
    }
  }

  
}