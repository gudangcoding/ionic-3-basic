import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
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
import { Navigation, NavigationDetail } from '../pages/navigation/navigation';
import { Tab, TabPageOne, TabPageTwo, TabPageThree } from '../pages/tab/tab';
import { Segment } from '../pages/segment/segment';

import { Modal, ModalContent} from '../pages/modal/modal';
import { Popover, PopoverPage } from '../pages/popover/popover';

import { CameraPage } from '../pages/camera/camera';
import { AppRatePage } from '../pages/apprate/apprate';
import { SocialPage } from '../pages/social/social';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { SMSPage } from '../pages/sms/sms';
import { CallPage } from '../pages/call/call';

import { Camera } from '@ionic-native/camera';
import { AppRate } from '@ionic-native/app-rate';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

import { MysqliPage } from '../pages/mysqli/mysqli';
import { FormMysqli } from '../pages/mysqli/form';
import { StoragePage } from '../pages/storage/storage';
import { FormStorage } from '../pages/storage/form';
import { SqlitePage } from '../pages/sqlite/sqlite';
import { FormSqlite } from '../pages/sqlite/form';

import { SQLite } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { PostProvider } from '../providers/post-provider';
import { ProviderPage } from '../pages/provider/provider';
import { CanvasPage } from '../pages/canvas/canvas';
import { ChatPage } from '../pages/chat/chat';
import { ColorPage } from '../pages/color/color';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HalamanBaru,

    Tombol, Ikon, NewList, Badge, Menu,
	  Grid, Card, Input, Checkbox, Radio,
    Toggle, Range, Select, Search, DateTime,
    Gesture, Toolbar, Loading, Alert, ActionSheet,
    Toast, Slide, Navigation, NavigationDetail, Tab,

    TabPageOne, TabPageTwo, TabPageThree, Segment, Modal,
    ModalContent, Popover, PopoverPage,

    CameraPage, AppRatePage, SocialPage, GeolocationPage, 
    SMSPage, CallPage,

    MysqliPage, FormMysqli, StoragePage, FormStorage, SqlitePage, FormSqlite,

    ProviderPage, CanvasPage, ChatPage, ColorPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    IonicStorageModule.forRoot(),   
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	  HalamanBaru,

    Tombol, Ikon, NewList, Badge, Menu,
    Grid, Card, Input, Checkbox, Radio,
    Toggle, Range, Select, Search, DateTime,
    Gesture, Toolbar, Loading, Alert, ActionSheet,
    Toast, Slide, Navigation, NavigationDetail, Tab,

    TabPageOne, TabPageTwo, TabPageThree, Segment, Modal,
    ModalContent, Popover, PopoverPage,

    CameraPage, AppRatePage, SocialPage, GeolocationPage, 
    SMSPage, CallPage,

    MysqliPage, FormMysqli, StoragePage, FormStorage, SqlitePage, FormSqlite,

    ProviderPage, CanvasPage, ChatPage, ColorPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,

    Camera, AppRate, SocialSharing, Geolocation, 
    NativeGeocoder, SMS, CallNumber, SQLite,

    PostProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
