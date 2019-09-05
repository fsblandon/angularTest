import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPostRoutingModule } from './detail-post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DetailPostRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class DetailPostModule { }
