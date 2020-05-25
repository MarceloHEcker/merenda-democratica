import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiciosPageRoutingModule } from './indicios-routing.module';

import { IndiciosPage } from './indicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiciosPageRoutingModule
  ],
  declarations: [IndiciosPage]
})
export class IndiciosPageModule {}
