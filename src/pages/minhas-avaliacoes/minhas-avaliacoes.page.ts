import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/modelos/avaliacao';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@Component( {
  selector: 'app-minhas-avaliacoes',
  templateUrl: './minhas-avaliacoes.page.html',
  styleUrls: [ './minhas-avaliacoes.page.scss' ],
} )
export class MinhasAvaliacoesPage implements OnInit {

  avaliacoes: Avaliacao[];

  constructor(
    private avaliacoesSvc: AvaliacoesServiceProvider,
  ) { }

  ngOnInit() {

    this.avaliacoesSvc.getByUser( 1 ).subscribe( res => {
      this.avaliacoes = res;
    } );

  }

}
