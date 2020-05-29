import { Component, OnInit } from '@angular/core';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';
import { Avaliacao } from 'src/modelos/avaliacao';

@Component( {
  selector: 'app-indicios-fraude',
  templateUrl: './indicios-fraude.page.html',
  styleUrls: [ './indicios-fraude.page.scss' ],
} )
export class IndiciosFraudePage implements OnInit {

  avaliacoes: Avaliacao[];

  constructor(
    private avaliacoesSvc: AvaliacoesServiceProvider,
  ) { }

  ngOnInit() {

    this.avaliacoesSvc.getIndiciosFraude().subscribe( res => {
      this.avaliacoes = res;
    } );

  }

}
