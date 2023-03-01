import {Component} from '@angular/core';
import {SMS} from '@ionic-native/sms';

@Component({
   templateUrl: 'sms.html'
})
export class SMSPage { 
  nohp: string;
  pesan: string;
  
  constructor(private sms: SMS) { }

  sendSMS(){
    this.sms.send(this.nohp, this.pesan);
  }
}