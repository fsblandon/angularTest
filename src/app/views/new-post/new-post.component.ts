import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPost = new FormGroup({});
  imagePath: any;
  photoUrl: any;
  post: Post = {
    id: '',
    title: '',
    description: '',
    tags: [],
    photoUrl: ''
  };

  constructor(
    public nav: NavbarService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.nav.hide();
    this.newPost = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['']
    });
  }

  addTag() {
    this.post.tags.push(this.newPost.controls.tag.value);
    this.newPost.get('tag').reset();
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.photoUrl = reader.result;
    };
    console.log(this.imagePath);
  }

  submit() {
    const fd = new FormData();
    fd.append('image', this.imagePath[0], this.imagePath[0].name);
    if (this.newPost.valid) {
      this.post.title = this.newPost.controls.title.value;
      this.post.description = this.newPost.controls.description.value;
      this.postService.addPost(this.post).subscribe(
        (data) => {
          this.post.id = data.id;
          this.postService.saveImage(data.id, fd).subscribe(
            (res: any) => {
              this.toastr.success('Success', 'Post Created', { timeOut: 3000, positionClass: 'toast-bottom-center' });
              this.router.navigate(['/listpost']);
            },
            (error) => {
              this.toastr.error('Fail', 'Image dont saved', { timeOut: 3000, positionClass: 'toast-bottom-center' });
            }
          );
        },
        (error) => {
          this.toastr.error('Fail', 'Post dont created', { timeOut: 3000, positionClass: 'toast-bottom-center' });
        }
      );
    }
  }

  deleteTag(item: any) {
    this.post.tags.includes(item) ? this.post.tags.splice(this.post.tags.indexOf(item), 1) : this.post.tags.sort();
  }

}
