import { Component, OnInit } from '@angular/core';

import { Compra } from 'src/modelos/compra';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';
import { Comentario } from 'src/modelos/comentario';
import { PrevisoesServiceProvider } from 'src/providers/previsoes-service/previsoes-service';
import { Previsao } from 'src/modelos/previsao';
import { ToastController } from '@ionic/angular';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

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
    private avalicaoSvc: AvaliacoesServiceProvider,
    private previsaoSvc: PrevisoesServiceProvider,
    private toastController: ToastController,
  ) { }

  ngOnInit() {

    this.run();

  }

  run() {
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

  async avaliarCompra( avalicaoStatus ) {

    let toast;
    let payload = {};

    switch ( avalicaoStatus ) {
      case 'APROVAR':

        payload = {
          compra_id: this.compra.id,
          usuario_id:
            status: true
        }

        this.avalicaoSvc.post( payload ).subscribe( async ( res ) => {

          toast = await this.toastController.create( {
            color: 'success',
            duration: 2000,
            message: 'Compra aprovada com sucesso...',
          } );

          await toast.present();

          this.run();


        } );

        break;

      case 'REJEITAR':

        payload = {
          compra_id: this.compra.id,
          status: false
        }

        this.avalicaoSvc.post( payload ).subscribe( async ( res ) => {

          toast = await this.toastController.create( {
            color: 'success',
            duration: 2000,
            message: 'Compra rejeitada com sucesso...',
          } );

          await toast.present();

          this.run();


        } );


        break;
      default:


        toast = await this.toastController.create( {
          color: 'dark',
          duration: 2000,
          message: 'Carregando nova compra...',
        } );

        await toast.present();

        this.run();
        break;
    }

  }



}
