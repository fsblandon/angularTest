import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listpost',
    pathMatch: 'full'
  },
  {
    path: 'listpost',
    loadChildren: './views/list-post/list-post.module#ListPostModule'
  },
  {
    path: 'addpost',
    loadChildren: './views/new-post/new-post.module#NewPostModule'
  },
  {
    path: 'detailpost/:id',
    loadChildren: './views/detail-post/detail-post.module#DetailPostModule'
  },
  {
    path: '**',
    redirectTo: 'listpost'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
