import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getposts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      this.URL + 'posts'
    );
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<any>(
      this.URL + 'posts', post
    );
  }

  saveImage(id: string, file: any): Observable<any> {
    return this.http.put(this.URL + 'posts/' + id + '/picture', file);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.URL + 'posts/' + id);
  }
}
