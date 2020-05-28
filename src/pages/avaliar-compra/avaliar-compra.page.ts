import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/modelos/compra';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';

@Component( {
  selector: 'app-avaliar-compra',
  templateUrl: './avaliar-compra.page.html',
  styleUrls: [ './avaliar-compra.page.scss' ],
} )
export class AvaliarCompraPage implements OnInit {

  compra: Compra;

  constructor(
    private compraSvc: ComprasServiceProvider,
  ) { }

  ngOnInit() {

    this.compraSvc.getRandom().subscribe( res => {
      this.compra = res;
    } );
  }

}
