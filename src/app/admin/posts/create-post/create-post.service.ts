import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {IPost} from "./ipost";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  private url: string = environment.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  addPost(post: IPost): Observable<IPost>{
    const data = new FormData();
    for ( const key in post ) {
      data.append(key, post[key]);
    }
    return this.http.post<IPost>(this.url,data);
  }

}
