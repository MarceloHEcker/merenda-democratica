import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasAvaliacoesPageRoutingModule } from './minhas-avaliacoes-routing.module';

import { MinhasAvaliacoesPage } from './minhas-avaliacoes.page';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasAvaliacoesPageRoutingModule
  ],
  providers: [
    AvaliacoesServiceProvider
  ],
  declarations: [ MinhasAvaliacoesPage ]
} )
export class MinhasAvaliacoesPageModule { }
