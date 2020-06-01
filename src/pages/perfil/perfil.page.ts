import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/modelos/usuario';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component( {
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: [ './perfil.page.scss' ],
} )
export class PerfilPage implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioSvc: UsuariosServiceProvider,
    public toastController: ToastController,
    public alertController: AlertController,
    private storage: Storage,
  ) { }

  async ngOnInit() {
    this.usuario = await this.usuarioSvc.getCurrentUser();
  }

  async updateProfile() {

    this.usuarioSvc.update( this.usuario )
      .subscribe(
        async ( result ) => {

          const toast = await this.toastController.create( {
            message: 'Usuário atualizado com sucesso!',
            position: 'top',
            color: 'success',
            duration: 3000,
          } );

          toast.present();

          const storagedUser = await this.usuarioSvc.getLoggedUserCached();

          storagedUser.user = this.usuario;

          await this.storage.set( 'loggedUser', storagedUser );

          //this.router.navigateByUrl( '/minhas-avaliacoes' );
        },
        async () => {

          const alert = await this.alertController.create( {
            cssClass: 'my-custom-class',
            header: 'Falha!',
            message: 'Problema ao atualizar usuário. Tente novamente.',
            buttons: [ 'OK' ]
          } );

          await alert.present();

        }
      );

  }

}
