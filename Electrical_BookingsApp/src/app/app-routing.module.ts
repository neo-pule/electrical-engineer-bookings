import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  {
    path: 'modalpage',
    loadChildren: () => import('./page/modalpage/modalpage.module').then( m => m.ModalpagePageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./page/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'requestform',
    loadChildren: () => import('./page/requestform/requestform.module').then( m => m.RequestformPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
