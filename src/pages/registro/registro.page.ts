import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario;

  private isLoggedIn: boolean;


  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private usuarioSvc: UsuariosServiceProvider,
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable( false );

    this.initUserInfo();
  }



  private async initUserInfo() {

    this.isLoggedIn = await this.usuarioSvc.isLoggedIn();

    if ( this.isLoggedIn ) {
      this.goToHomePage();
    }
  }


  private goToHomePage() {
    this.router.navigateByUrl( '/minhas-avaliacoes' );
  }



  async registro() {
    this.usuarioSvc.save( this.usuario )
      .subscribe(
        async ( result ) => {
          if ( result ) {
            this.router.navigateByUrl( '/login' )
          }
        },
        async () => {
          const alert = await this.alertCtrl.create( {
            header: 'Falha no cadastro',
            message: 'Erro ao cadastrar o seu usuário. Verifique os dados e tente novamente.',
            buttons: [
              { text: 'Ok' }
            ]
          } );

          alert.present();
        }
      );
  }




}

