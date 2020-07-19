import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'home',
        children:[
          {path:'',loadChildren:()=>import('../pages/home/home.module').then(m => m.HomePageModule)}
        ]
      },
      {
        path:'jobs',
        children:[
          {path:'',loadChildren:()=>import('../pages/jobs/jobs.module').then(m => m.JobsPageModule)}
        ]
      },
      {
        path:'settings',
        children:[
          {path:'',loadChildren:()=>import('../pages/settings/settings.module').then(m => m.SettingsPageModule)}
        ]
      },
      {
        path:'categories',
        children:[
          {path:'',loadChildren:()=>import('../pages/categories/categories.module').then(m => m.CategoriesPageModule)}
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
