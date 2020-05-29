import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/modelos/compra';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';
import { Comentario } from 'src/modelos/comentario';

@Component( {
  selector: 'app-avaliar-compra',
  templateUrl: './avaliar-compra.page.html',
  styleUrls: [ './avaliar-compra.page.scss' ],
} )
export class AvaliarCompraPage implements OnInit {

  compra: Compra;
  comprasMunicipios: Compra[] = [];
  comentarios: Comentario[] = [];

  constructor(
    private compraSvc: ComprasServiceProvider,
    private comentarioSvc: ComentariosServiceProvider,
  ) { }

  ngOnInit() {

    this.compraSvc.getRandom().subscribe( res => {
      this.compra = res;

      this.compraSvc.getMunicipiosProximos(this.compra.id).subscribe(compraData => {
        this.comprasMunicipios = compraData;
      });

      this.comentarioSvc.getByOrder(this.compra.id).subscribe(comentarioData => {
        this.comentarios = comentarioData;
      })

    } );


  }

}
