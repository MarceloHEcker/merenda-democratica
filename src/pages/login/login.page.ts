import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = 'usuario@merendademocratica.com.br';
  password: string = 'merenda123';

  constructor(
    private router: Router,
    private _alertCtrl: AlertController,
    private _usuariosService: UsuariosServiceProvider
  ) { }

  ngOnInit() {
  }


  async login() {
    this._usuariosService
        .doLogin(this.email, this.password)
        .subscribe(
          (usuario: Usuario) => {
            this.router.navigate(['/home']);
          },
          async () => {
            const alert = await this._alertCtrl.create({
              header: 'Falha no login',
              message: 'Email ou senha incorretos! Verifique!',
              buttons: [
                { text: 'Ok' }
              ]
            });

            alert.present();
          }
        );    
  }

}
