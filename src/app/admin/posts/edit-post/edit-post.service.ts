import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

import {IPost} from "../create-post/ipost";

@Injectable({
  providedIn: 'root'
})
export class EditPostService {
  private url: string = "http://localhost:8000/api/posts";

  constructor(private http: HttpClient) { }

  getPost(id){
    return this.http.get(this.url + '/' + id);
  }

  editPost(post: IPost): Observable<IPost>{
    const data = new FormData();
    for ( const key in post ) {
      data.append(key, post[key]);
    }
    return this.http.post<IPost>(this.url + '/' + post.id ,data);
  }
}
