import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'objeto', pathMatch: 'full' },
  // { path: 'home'  , loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)},
  // { path: 'jobs'  , loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)},
  { path: 'tabs'  , loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule) },
  
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'objetos',
  //   loadChildren: () => import('./pages/objetos/objetos.module').then( m => m.ObjetosPageModule)
  // },
  // { path: '**'  , redirectTo: 'inicio' },
  {
    path: 'objeto',
    loadChildren: () => import('./pages/objeto/objeto.module').then( m => m.ObjetoPageModule)
  },
 


  // {
  //   path: 'categories',
  //   loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
