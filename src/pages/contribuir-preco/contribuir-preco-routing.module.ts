import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContribuirPrecoPage } from './contribuir-preco.page';

const routes: Routes = [
  {
    path: '',
    component: ContribuirPrecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContribuirPrecoPageRoutingModule {}
