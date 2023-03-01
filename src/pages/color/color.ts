import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'color.html',
})
export class ColorPage {
  color: any = {red: 212, green: 0, blue: 0};

  constructor(private storage: Storage) { }

  ionViewWillEnter(){
    this.storage.get('color').then((data)=>{
      if(data!=undefined) this.color = data;
    });
  }

  saveColor(){
    this.storage.set('color', this.color);
  }

  colorRedLeft(){
  	return "rgb(0,"+this.color.green+","+this.color.blue+")";
  }

  colorRedRight(){
  	return "rgb(255,"+this.color.green+","+this.color.blue+")";
  }

  colorGreenLeft(){
  	return "rgb("+this.color.red+",0,"+this.color.blue+")";
  }

  colorGreenRight(){
  	return "rgb("+this.color.red+",255,"+this.color.blue+")";
  }

  colorBlueLeft(){
  	return "rgb("+this.color.red+","+this.color.green+",0)";
  }

  colorBlueRight(){
  	return "rgb("+this.color.red+","+this.color.green+",255)";
  }

  bgHeader(){
  	return "rgb("+this.color.red+","+this.color.green+","+this.color.blue+")";
  }
}
