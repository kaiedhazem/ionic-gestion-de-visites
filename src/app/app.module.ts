import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import {  EmailComposer } from '@ionic-native/email-composer';
import {File} from '@ionic-native/file';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthProvider } from '../providers/auth/auth';
import { RegisterPage } from '../pages/register/register';
import {ListePage} from '../pages/liste/liste';
import { ModifierPage } from '../pages/modifier/modifier';
import { Base64 } from '@ionic-native/base64';
import { ImagePicker } from '@ionic-native/image-picker';
import { Calendar } from '@ionic-native/calendar';
import { CalendrierPage} from '../pages/calendrier/calendrier';
import { DetailscalendarPage } from '../pages/detailscalendar/detailscalendar';
@NgModule({
  declarations: [
    MyApp,
   
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ListePage,
    ModifierPage,
    DetailscalendarPage,
    CalendrierPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,
    ListePage,
    ModifierPage,
    DetailscalendarPage,
    CalendrierPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera, EmailComposer,File, WebView, Geolocation,Base64,ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Calendar
  ]
})
export class AppModule {}
