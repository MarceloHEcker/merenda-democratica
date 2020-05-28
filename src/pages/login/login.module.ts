import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { HttpClient } from '@angular/common/http';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  providers: [
    UsuariosServiceProvider,
  ],
  declarations: [ LoginPage ]
} )
export class LoginPageModule { }
