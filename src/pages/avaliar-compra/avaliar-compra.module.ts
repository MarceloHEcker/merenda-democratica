import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliarCompraPageRoutingModule } from './avaliar-compra-routing.module';

import { AvaliarCompraPage } from './avaliar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliarCompraPageRoutingModule
  ],
  declarations: [AvaliarCompraPage]
})
export class AvaliarCompraPageModule {}
