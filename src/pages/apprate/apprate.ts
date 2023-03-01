import {Component} from '@angular/core';
import { AppRate } from '@ionic-native/app-rate';

@Component({
   templateUrl: 'apprate.html'
})
export class AppRatePage { 
   constructor(private appRate: AppRate) { }

   giveRate(){
      this.appRate.preferences.storeAppURL = {
        ios: '<app_id>',
        android: 'market://details?id=<package_name>',
        windows: 'ms-windows-store://review/?ProductId=<store_id>'
      };

      this.appRate.promptForRating(true);
   }
}
