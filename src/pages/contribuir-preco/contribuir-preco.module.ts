import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContribuirPrecoPageRoutingModule } from './contribuir-preco-routing.module';

import { ContribuirPrecoPage } from './contribuir-preco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContribuirPrecoPageRoutingModule
  ],
  declarations: [ContribuirPrecoPage]
})
export class ContribuirPrecoPageModule {}
