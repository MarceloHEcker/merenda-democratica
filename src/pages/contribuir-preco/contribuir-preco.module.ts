import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContribuirPrecoPageRoutingModule } from './contribuir-preco-routing.module';

import { ContribuirPrecoPage } from './contribuir-preco.page';
import { LocalityServiceProvider } from 'src/providers/locality-service/locality-service';
import { PrecosServiceProvider } from 'src/providers/precos-service/precos-service';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContribuirPrecoPageRoutingModule
  ],
  declarations: [ ContribuirPrecoPage ],
  providers: [
    LocalityServiceProvider,
    PrecosServiceProvider,
  ]
} )
export class ContribuirPrecoPageModule { }
