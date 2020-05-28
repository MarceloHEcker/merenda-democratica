import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';


@Component( {
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
} )
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private _alertCtrl: AlertController,
    private _usuariosService: UsuariosServiceProvider,
    public menuCtrl: MenuController
  ) { }

  email: string;
  senha: string;

  ngOnInit() {

    this.menuCtrl.enable( false );

  }


  async login() {
    this._usuariosService
      .doLogin( this.email, this.senha )
      .subscribe(
        ( usuario: Usuario ) => {
          this.router.navigate( [ '/minhas-avaliacoes' ] );
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
