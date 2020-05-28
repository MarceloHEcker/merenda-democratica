import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodasAvaliacoesPage } from './todas-avaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: TodasAvaliacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodasAvaliacoesPageRoutingModule {}
