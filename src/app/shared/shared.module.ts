import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from '../views/list-post/list-post.component';
import { NewPostComponent } from '../views/new-post/new-post.component';
import { DetailPostComponent } from '../views/detail-post/detail-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListPostComponent,
    NewPostComponent,
    DetailPostComponent
  ],
  exports: [
    ListPostComponent,
    NewPostComponent,
    DetailPostComponent
  ]
})
export class SharedModule { }
