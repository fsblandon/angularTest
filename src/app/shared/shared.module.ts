import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from '../views/list-post/list-post.component';
import { NewPostComponent } from '../views/new-post/new-post.component';
import { DetailPostComponent } from '../views/detail-post/detail-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListPostComponent,
    NewPostComponent,
    DetailPostComponent
  ],
  exports: [
    ListPostComponent,
    NewPostComponent,
    DetailPostComponent,
    FormsModule,
  ]
})
export class SharedModule { }
