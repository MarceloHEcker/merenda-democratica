import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: '../pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'minhas-avaliacoes', loadChildren: '../pages/minhas-avaliacoes/minhas-avaliacoes.module#MinhasAvaliacoesPageModule' },
  { path: 'todas-avaliacoes', loadChildren: '../pages/todas-avaliacoes/todas-avaliacoes.module#TodasAvaliacoesPageModule' },
  { path: 'contribuir-preco', loadChildren: '../pages/contribuir-preco/contribuir-preco.module#ContribuirPrecoPageModule' },
  { path: 'avaliar-compra', loadChildren: '../pages/avaliar-compra/avaliar-compra.module#AvaliarCompraPageModule' },
  { path: 'merenda-bot', loadChildren: '../pages/merenda-bot/merenda-bot.module#MerendaBotPageModule' },
  { path: 'cadastro', loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'indicios-fraude', loadChildren: '../pages/indicios-fraude/indicios-fraude.module#IndiciosFraudePageModule' },

];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } )
  ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
