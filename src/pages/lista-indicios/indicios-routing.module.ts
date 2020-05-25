import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiciosPage } from './indicios.page';

const routes: Routes = [
  {
    path: '',
    component: IndiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiciosPageRoutingModule {}
