import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestformPage } from './requestform.page';

const routes: Routes = [
  {
    path: '',
    component: RequestformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestformPageRoutingModule {}
