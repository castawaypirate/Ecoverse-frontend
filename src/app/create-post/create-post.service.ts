import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {IPost} from "./ipost";

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  private url: string = "http://localhost:8000/api/posts";

  constructor(private http: HttpClient) { }

  addPost(post: IPost): Observable<IPost>{
    return this.http.post<IPost>("http://localhost:8000/api/posts",post);

  }

  public getPostById(ID) {
    let id: number = ID;
    let endPoints = "/" + id;
    this.http.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }
  deletePost(id){
    let endPoints = "/" + id;
    return this.http.delete(this.url)
  }
}
