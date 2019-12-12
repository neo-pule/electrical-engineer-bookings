import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestformPageRoutingModule } from './requestform-routing.module';

import { RequestformPage } from './requestform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestformPageRoutingModule
  ],
  declarations: [RequestformPage]
})
export class RequestformPageModule {}
