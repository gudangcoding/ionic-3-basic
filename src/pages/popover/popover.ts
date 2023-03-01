import {Component} from '@angular/core';
import {PopoverController} from 'ionic-angular';

@Component({
  templateUrl: 'popover-page.html'
})
export class PopoverPage {
  constructor() {

  }
}

@Component({
  templateUrl: 'popover.html'
})
export class Popover {
 
  constructor ( private popoverCtrl : PopoverController ){
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage);

    popover.present({
      ev: ev
    });
  }
}
