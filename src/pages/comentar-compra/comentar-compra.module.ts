import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarCompraPageRoutingModule } from './comentar-compra-routing.module';

import { ComentarCompraPage } from './comentar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarCompraPageRoutingModule
  ],
  declarations: [ComentarCompraPage]
})
export class ComentarCompraPageModule {}
