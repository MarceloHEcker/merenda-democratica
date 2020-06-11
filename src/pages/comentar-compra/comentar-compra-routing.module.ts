import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarCompraPage } from './comentar-compra.page';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';

const routes: Routes = [
  {
    path: ':avaliacaoId',
    component: ComentarCompraPage
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
  providers: [
    ComprasServiceProvider,
    ComentariosServiceProvider,
    AvaliacoesServiceProvider
  ]
} )
export class ComentarCompraPageRoutingModule { }
