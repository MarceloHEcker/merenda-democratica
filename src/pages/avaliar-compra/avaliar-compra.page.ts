import { Component, OnInit } from '@angular/core';

import { Compra } from 'src/modelos/compra';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';
import { Comentario } from 'src/modelos/comentario';
import { PrevisoesServiceProvider } from 'src/providers/previsoes-service/previsoes-service';
import { Previsao } from 'src/modelos/previsao';

@Component( {
  selector: 'app-avaliar-compra',
  templateUrl: './avaliar-compra.page.html',
  styleUrls: [ './avaliar-compra.page.scss' ],
} )
export class AvaliarCompraPage implements OnInit {

  compra: Compra;
  comprasMunicipios: Compra[] = [];
  comentarios: Comentario[] = [];
  estimativaPreco: Previsao[];

  constructor(
    private compraSvc: ComprasServiceProvider,
    private comentarioSvc: ComentariosServiceProvider,
    private previsaoSvc: PrevisoesServiceProvider,
  ) { }

  ngOnInit() {

    this.compraSvc.getRandom().subscribe( res => {
      this.compra = res;

      this.compraSvc.getMunicipiosProximos( this.compra.id ).subscribe( compraData => {
        this.comprasMunicipios = compraData;
      } );

      this.comentarioSvc.getByOrder( this.compra.id ).subscribe( comentarioData => {
        this.comentarios = comentarioData;
      } );

      let payload = {
        'produto': this.compra.produto,
        'uf': this.compra.uf
      };

      this.previsaoSvc.indexCompra( payload ).subscribe( res => {

        this.estimativaPreco = this.getNearest( { quantidade: this.compra.quantidade }, res );

      } );

    } );


  }

  getDistance( p1, p2 ) {
    var a = p2.quantidade - p1.quantidade;
    return Math.sqrt( a * a );
  }

  getNearest( point, points ) {
    var min = Number.POSITIVE_INFINITY,
      minIndex;
    var dist;
    for ( var i = 0; i < points.length; i++ ) {
      dist = this.getDistance( point, points[ i ] );
      if ( dist < min ) {
        min = dist;
        minIndex = i;
      }
    }
    return points[ minIndex ];
  }


}
