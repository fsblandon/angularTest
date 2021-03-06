import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];
  publicUrl = 'http://localhost:3000/';

  constructor(
    private postService: PostService,
    public nav: NavbarService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.postService.getposts()
    .subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        this.toastr.error('Fail ' + error, 'Image dont saved', { timeOut: 3000, positionClass: 'toast-bottom-center' });
      }
    );

    this.nav.show();
  }

  viewDetail(id: string) {
    this.router.navigate([`/detailpost/${id}`]);
  }

}
