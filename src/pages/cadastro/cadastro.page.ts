import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { Usuario } from 'src/modelos/usuario';

import { Vibration } from '@ionic-native/vibration';
import { DatePicker } from '@ionic-native/date-picker';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';


@Component( {
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: [ './cadastro.page.scss' ],
} )
export class CadastroPage implements OnInit {

  public nome: string = '';
  public endereco: string = '';
  public email: string = '';
  public data: string = '';
  public login: string = '';
  public telefone: number;

  constructor(
    public router: Router,
    private _alertCtrl: AlertController,
    private _usuariosService: UsuariosServiceProvider,
    private _vibration: typeof Vibration,
    private _datePicker: typeof DatePicker
  ) { }

  ngOnInit() {
  }

  selectDate() {
    this._datePicker.show( {
      date: new Date(),
      mode: 'date'
    } )
      .then( data => this.data = data.toISOString() );
  }

  async cadastra() {
    if ( !this.nome || !this.endereco || !this.email ) {
      this._vibration.vibrate( 500 );

      const alert = await this._alertCtrl.create( {
        header: 'Preenchimento obrigatório',
        subHeader: 'Preencha todos os campos!',
        buttons: [
          { text: 'ok' }
        ]
      } );

      alert.present();

      return;
    }

    let cadastro: Usuario = {
      login: this.login,
      nome: this.nome,
      endereco: this.endereco,
      email: this.email,
      dataNascimento: this.data,
      telefone: this.telefone
    };


    let mensagem = '';

    this._usuariosService.save( cadastro ).subscribe(
      () => mensagem = 'Agendamento realizado!',
      ( err: Error ) => mensagem = err.message
    ).add(
      async () => {
        const alert = await this._alertCtrl.create( {
          header: 'Aviso',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                this.router.navigate( [ 'home' ] );
              }
            }
          ],
          message: mensagem
        } );


        alert.present();
      }
    );
  }



}
