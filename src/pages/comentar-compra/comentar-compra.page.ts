import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/modelos/compra';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';
import { Comentario } from 'src/modelos/comentario';
import { ActivatedRoute } from '@angular/router';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';
import { Avaliacao } from 'src/modelos/avaliacao';
import { ToastController } from '@ionic/angular';


@Component( {
  selector: 'app-comentar-compra',
  templateUrl: './comentar-compra.page.html',
  styleUrls: [ './comentar-compra.page.scss' ],
} )
export class ComentarCompraPage implements OnInit {

  compra: Compra;
  comentarios: Comentario[] = [];
  avaliacao: Avaliacao;
  comentario: string;

  constructor(
    private compraSvc: ComprasServiceProvider,
    private comentarioSvc: ComentariosServiceProvider,
    private avaliacaoSvc: AvaliacoesServiceProvider,
    private route: ActivatedRoute,
    private toastController: ToastController,
  ) { }

  ngOnInit() {


    this.route.paramMap.subscribe( params => {

      const avaliacaoId = Number( params.get( 'avaliacaoId' ) );

      this.avaliacaoSvc.get( avaliacaoId ).subscribe( avaliacao => {

        this.avaliacao = avaliacao;

        console.log( 'avaliacao', avaliacao );

        this.comentarioSvc.getByOrder( this.avaliacao.compra.id ).subscribe( comentarioData => {
          this.comentarios = comentarioData;
        } );

      } );


    } );


  }

  adicionarComentario() {

    if ( this.comentario ) {

      let payload = {
        comentario: this.comentario,
        avaliacao_id: this.avaliacao.id
      };

      this.comentarioSvc.post( payload )
        .subscribe(
          async ( result ) => {

            if ( result[ 'id' ] ) {
              const toast = await this.toastController.create( {
                message: 'Comentário realizado com sucesso!',
                position: 'top',
                color: 'success',
                duration: 3000,
              } );

              toast.present();

              this.comentarioSvc.getByOrder( this.avaliacao.compra.id ).subscribe( comentarioData => {
                this.comentarios = comentarioData;
              } );

              this.comentario = '';

            }


          },
          async ( error ) => {

            const toast = await this.toastController.create( {
              message: 'Erro ao enviar comentário!',
              position: 'top',
              color: 'danger',
              duration: 3000,
            } );

            toast.present();

          } );
    }

  }

}
