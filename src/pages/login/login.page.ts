import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component( {
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
} )
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  private isLoggedIn: boolean;

  constructor(
    private router: Router,
    private _alertCtrl: AlertController,
    private navController: NavController,
    private _usuariosService: UsuariosServiceProvider,
    public menuCtrl: MenuController,
    private storage: Storage,
  ) { }

  ngOnInit() {

    this.menuCtrl.enable( false );

    this.initUserInfo();

  }

  private async initUserInfo() {

    this.isLoggedIn = await this._usuariosService.isLoggedIn();

    if ( this.isLoggedIn ) {
      this.goToHomePage();
    }
  }

  private goToHomePage() {
    this.router.navigateByUrl( '/minhas-avaliacoes' );
  }


  async login() {
    this._usuariosService
      .doLogin( this.email, this.senha )
      .subscribe(
        async ( result ) => {

          await this.storage.set( 'loggedUser', result );

          if ( result ) {
            this.router.navigateByUrl( '/minhas-avaliacoes' )
          }
        },
        async () => {
          const alert = await this._alertCtrl.create( {
            header: 'Falha no login',
            message: 'Email ou senha incorretos! Verifique!',
            buttons: [
              { text: 'Ok' }
            ]
          } );

          alert.present();
        }
      );
  }

}
