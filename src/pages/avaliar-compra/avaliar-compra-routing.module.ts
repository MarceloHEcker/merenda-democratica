import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliarCompraPage } from './avaliar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliarCompraPageRoutingModule {}
