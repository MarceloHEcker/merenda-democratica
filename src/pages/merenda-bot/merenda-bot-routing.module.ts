import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerendaBotPage } from './merenda-bot.page';

const routes: Routes = [
  {
    path: '',
    component: MerendaBotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerendaBotPageRoutingModule {}
