import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuariosServiceProvider } from 'src/providers/usuarios-service/usuarios-service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ]
} )
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Avaliar Compra',
      url: '/avaliar-compra',
      icon: 'eye'
    },
    {
      title: 'Minhas Avaliações',
      url: '/minhas-avaliacoes',
      icon: 'person-add'
    },
    {
      title: 'Todas Avaliações',
      url: '/todas-avaliacoes',
      icon: 'people'
    },
    {
      title: 'Indícios de Fraude',
      url: '/indicios-fraude',
      icon: 'warning'
    },
    {
      title: 'Contribuir com Preço',
      url: '/contribuir-preco',
      icon: 'add-circle'
    },
    {
      title: 'Merenda BOT',
      url: '/merenda-bot',
      icon: 'laptop'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
  ];
  rootPage: any;
  isLoggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: UsuariosServiceProvider,
    private router: Router,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then( async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.isLoggedIn = await this.auth.isLoggedIn();
      this.rootPage = this.isLoggedIn ? 'MinhasAvaliacoesPage' : 'LoginPage';
      console.log( 'rootPage', this.rootPage );

    } );
  }

  ngOnInit() {
    const path = window.location.pathname.split( 'folder/' )[ 1 ];
    console.log( 'path', path )
    if ( path !== undefined ) {
      this.selectedIndex = this.appPages.findIndex( page => page.title.toLowerCase() === path.toLowerCase() );
    }
  }

  async logout() {
    await this.auth.logout();
    this.router.navigateByUrl( '/login' );
  }
}
