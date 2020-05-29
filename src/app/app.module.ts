import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyFormatPipe } from 'src/utils/CurrencyFormatPipe';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';

@NgModule( {
  declarations: [ AppComponent, CurrencyFormatPipe ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CurrencyFormatPipe,
    UsuariosServiceProvider,
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
