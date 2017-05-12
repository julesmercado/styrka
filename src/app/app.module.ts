import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Calculator } from '../pages/calculator/calculator';
import { Settings } from '../pages/settings/settings';
import { Gunlist } from '../pages/gunlist/gunlist';
import { TabsPage } from '../pages/tabs/tabs';


import { GunComponents } from '../pages/gunlist/guncomponents/guncomponents';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Calculator,
    Settings,
    Gunlist,
    Signup,
    TabsPage,
    GunComponents
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Calculator,
    Settings,
    Gunlist,
    Signup,
    TabsPage,
    GunComponents
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
