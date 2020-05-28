import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerendaBotPageRoutingModule } from './merenda-bot-routing.module';

import { MerendaBotPage } from './merenda-bot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerendaBotPageRoutingModule
  ],
  declarations: [MerendaBotPage]
})
export class MerendaBotPageModule {}
