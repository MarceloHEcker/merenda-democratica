import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiciosFraudePage } from './indicios-fraude.page';

const routes: Routes = [
  {
    path: '',
    component: IndiciosFraudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiciosFraudePageRoutingModule {}
