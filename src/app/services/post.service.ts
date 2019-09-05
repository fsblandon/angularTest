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
}
