import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/modelos/avaliacao';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@Component( {
  selector: 'app-todas-avaliacoes',
  templateUrl: './todas-avaliacoes.page.html',
  styleUrls: [ './todas-avaliacoes.page.scss' ],
} )
export class TodasAvaliacoesPage implements OnInit {

  avaliacoes: Avaliacao[];

  constructor(
    private avaliacoesSvc: AvaliacoesServiceProvider,
  ) { }

  ngOnInit() {

    this.avaliacoesSvc.getByUser( 1 ).subscribe( res => {
      this.avaliacoes = res;

      console.log( 'avaliacoes', res );
    } );

  }

}
