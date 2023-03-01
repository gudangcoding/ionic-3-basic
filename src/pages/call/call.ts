import {Component} from '@angular/core';
import {CallNumber} from '@ionic-native/call-number';

@Component({
   templateUrl: 'call.html'
})
export class CallPage { 
  nohp: string = '085812345678';
  
  constructor(private callNumber: CallNumber) { }

  doCall(){
    this.callNumber.callNumber(this.nohp, true);
  }
}