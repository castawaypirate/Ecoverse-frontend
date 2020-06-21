import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {IPost} from "../create-post/ipost";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  private url: string = environment.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<IPost[]>(this.url + '/author');
  }
}
