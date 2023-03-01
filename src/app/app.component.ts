import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HalamanBaru } from '../pages/halaman-baru/halaman-baru';

import { Tombol } from '../pages/tombol/tombol';
import { Ikon } from '../pages/ikon/ikon';
import { NewList } from '../pages/newlist/newlist';
import { Badge } from '../pages/badge/badge';
import { Menu } from '../pages/menu/menu';

import { Grid } from '../pages/grid/grid';
import { Card } from '../pages/card/card';
import { Input } from '../pages/input/input';
import { Checkbox } from '../pages/checkbox/checkbox';
import { Radio } from '../pages/radio/radio';

import { Toggle } from '../pages/toggle/toggle';
import { Range } from '../pages/range/range';
import { Select } from '../pages/select/select';
import { Search } from '../pages/search/search';
import { DateTime } from '../pages/datetime/datetime';

import { Gesture } from '../pages/gesture/gesture';
import { Toolbar } from '../pages/toolbar/toolbar';
import { Loading } from '../pages/loading/loading';
import { Alert } from '../pages/alert/alert';
import { ActionSheet } from '../pages/action-sheet/action-sheet';

import { Toast } from '../pages/toast/toast';
import { Slide } from '../pages/slide/slide';
import { Navigation} from '../pages/navigation/navigation';
import { Tab } from '../pages/tab/tab';
import { Segment } from '../pages/segment/segment';

import { Modal } from '../pages/modal/modal';
import { Popover } from '../pages/popover/popover';


//Native
import { CameraPage } from '../pages/camera/camera';
import { AppRatePage } from '../pages/apprate/apprate';
import { SocialPage } from '../pages/social/social';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { SMSPage } from '../pages/sms/sms';
import { CallPage } from '../pages/call/call';

//Database
import { MysqliPage } from '../pages/mysqli/mysqli';
import { StoragePage } from '../pages/storage/storage';
import { SqlitePage } from '../pages/sqlite/sqlite';

//Trik
import { ProviderPage } from '../pages/provider/provider';
import { CanvasPage } from '../pages/canvas/canvas';
import { ChatPage } from '../pages/chat/chat';
import { ColorPage } from '../pages/color/color';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ColorPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Halaman Baru', component: HalamanBaru },
      
      { title: 'Tombol', component: Tombol },
      { title: 'Ikon', component: Ikon },
      { title: 'New List', component: NewList },
      { title: 'Badge', component: Badge },
      { title: 'Menu', component: Menu },

      { title: 'Grid', component: Grid },
      { title: 'Card', component: Card },
      { title: 'Input', component: Input },
      { title: 'Checkbox', component: Checkbox },
      { title: 'Radio', component: Radio },

      { title: 'Toggle', component: Toggle },
      { title: 'Range', component: Range },
      { title: 'Select', component: Select },
      { title: 'Search', component: Search },
      { title: 'DateTtime', component: DateTime },

      { title: 'Gesture', component: Gesture },
      { title: 'Toolbar', component: Toolbar },
      { title: 'Loading', component: Loading },
      { title: 'Alert', component: Alert },
      { title: 'Action Sheet', component: ActionSheet },

      { title: 'Toast', component: Toast },
      { title: 'Slide', component: Slide },
      { title: 'Navigation', component: Navigation },
      { title: 'Tab', component: Tab },
      { title: 'Segment', component: Segment },

      { title: 'Modal', component: Modal },
      { title: 'Popover', component: Popover },

      //Native
      { title: 'Camera', component: CameraPage },
      { title: 'App Rate', component: AppRatePage },
      { title: 'Social Sharing', component: SocialPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'SMS', component: SMSPage },
      { title: 'Call Number', component: CallPage },

      //Database
      { title: 'Database Mysqli', component: MysqliPage },
      { title: 'Storage', component: StoragePage },
      { title: 'Database SQLite', component: SqlitePage },

      //Trik
      { title: 'Custome Provider', component: ProviderPage },
      { title: 'HTML5 Canvas', component: CanvasPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Customizable Color', component: ColorPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
