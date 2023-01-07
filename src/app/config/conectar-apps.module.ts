import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectarAppsPageRoutingModule } from './conectar-apps-routing.module';

import { ConectarAppsPage } from './conectar-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectarAppsPageRoutingModule
  ],
  declarations: [ConectarAppsPage]
})
export class ConectarAppsPageModule {}
