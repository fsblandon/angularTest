import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
  providers: [PostService]
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];
  publicUrl = 'http://localhost:3000/';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getposts()
    .subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
