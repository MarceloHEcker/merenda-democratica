import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodasAvaliacoesPageRoutingModule } from './todas-avaliacoes-routing.module';

import { TodasAvaliacoesPage } from './todas-avaliacoes.page';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodasAvaliacoesPageRoutingModule
  ],
  declarations: [ TodasAvaliacoesPage ],
  providers: [
    AvaliacoesServiceProvider
  ]
} )
export class TodasAvaliacoesPageModule { }
