import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {IPost} from "../create-post/ipost";


@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private url: string = "http://localhost:8000/api/posts";

  constructor(private http: HttpClient) { }

  getPosts(id){
    return this.http.get(this.url + '/author/' + id);
  }
}
