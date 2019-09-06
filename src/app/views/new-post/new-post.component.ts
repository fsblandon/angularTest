import { Component, OnInit, EventEmitter } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { ToastrService } from 'ngx-toastr';
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
  dataTag: string;
  tag: string;

  constructor(
    public nav: NavbarService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.nav.hide();
    this.newPost = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: [[], Validators.required],
      image: ['', Validators.required]
    });
  }

  addTag() {
    this.newPost.get('tags').setValue(this.dataTag);
    this.tag = this.dataTag;
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
    if (this.newPost.valid) {
      this.toastr.success('Success', 'Post Created', { timeOut: 3000, positionClass: 'toast-bottom-center' });
      this.router.navigate(['/listpost']);
    }
  }

  getWords(event: any) {
    this.dataTag = event.srcElement.value;
  }

}
