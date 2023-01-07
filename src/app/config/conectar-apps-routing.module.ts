import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectarAppsPage } from './conectar-apps.page';

const routes: Routes = [
  {
    path: '',
    component: ConectarAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConectarAppsPageRoutingModule {}
