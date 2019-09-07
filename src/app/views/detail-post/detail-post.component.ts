import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Post } from 'src/app/models/post';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    description: '',
    tags: [],
    photoUrl: ''
  };
  publicUrl = 'http://localhost:3000/';
  id: string;

  constructor(
    public nav: NavbarService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService) {
      this.route.params.subscribe((params: Params) => {
        this.id = (params['id']) ? params['id'] : undefined;
        if (this.id) {
          this.postService.getPostById(this.id)
          .subscribe(data => {
            this.post = data;
          });
        }
      });
    }

  ngOnInit() {
    this.nav.show();
  }

}
