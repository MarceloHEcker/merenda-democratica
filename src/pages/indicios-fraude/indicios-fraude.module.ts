import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiciosFraudePageRoutingModule } from './indicios-fraude-routing.module';

import { IndiciosFraudePage } from './indicios-fraude.page';
import { AvaliacoesServiceProvider } from 'src/providers/avaliacoes-service/avaliacoes-service';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiciosFraudePageRoutingModule
  ],
  declarations: [ IndiciosFraudePage ],
  providers: [
    AvaliacoesServiceProvider
  ]
} )
export class IndiciosFraudePageModule { }
