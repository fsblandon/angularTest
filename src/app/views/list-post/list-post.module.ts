import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostRoutingModule } from './list-post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListPostRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class ListPostModule { }
