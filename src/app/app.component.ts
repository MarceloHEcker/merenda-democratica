import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ]
} )
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Minhas Avaliações',
      url: '/minhas-avaliacoes',
      icon: 'person-add'
    },
    {
      title: 'Avaliar Compra',
      url: '/avaliar-compra',
      icon: 'eye'
    },
    {
      title: 'Todas Avaliações',
      url: '/todas-avaliacoes',
      icon: 'people'
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
      title: 'Indícios de Fraude',
      url: '/indicios-fraude',
      icon: 'warning'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    } );
  }

  ngOnInit() {
    const path = window.location.pathname.split( 'folder/' )[ 1 ];
    if ( path !== undefined ) {
      this.selectedIndex = this.appPages.findIndex( page => page.title.toLowerCase() === path.toLowerCase() );
    }
  }
}
