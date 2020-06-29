import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliarCompraPageRoutingModule } from './avaliar-compra-routing.module';

import { AvaliarCompraPage } from './avaliar-compra.page';
import { ComprasServiceProvider } from 'src/providers/compras-service/compras-service';
import { ComentariosServiceProvider } from 'src/providers/comentarios-service/comentarios-service';
import { PrevisoesServiceProvider } from 'src/providers/previsoes-service/previsoes-service';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliarCompraPageRoutingModule
  ],
  declarations: [ AvaliarCompraPage ],
  providers: [
    AvaliacoesServiceProvider,
    ComprasServiceProvider,
    ComentariosServiceProvider,
    PrevisoesServiceProvider,
  ]
} )
export class AvaliarCompraPageModule { }
