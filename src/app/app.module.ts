import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'
var firebaseConfig = {
  apiKey: "AIzaSyDI17h9emfG8CeF_NVFjD_6jdeGZUG_odI",
  authDomain: "ionicproject-6d1c1.firebaseapp.com",
  databaseURL: "https://ionicproject-6d1c1.firebaseio.com",
  projectId: "ionicproject-6d1c1",
  storageBucket: "ionicproject-6d1c1.appspot.com",
  messagingSenderId: "576032485643",
  appId: "1:576032485643:web:7ca8bb5902e9208a4cb20e"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule],

  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
