import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewPostRoutingModule,
    SharedModule
  ],
  declarations: [],
  exports: []
})
export class NewPostModule { }
