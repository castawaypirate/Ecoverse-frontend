import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {IPost} from "../create-post/ipost";

@Injectable({
  providedIn: 'root'
})
export class EditPostService {

  headers = new HttpHeaders({
    Authorization:
      `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MGRhNWE3ZC1iODY0LTQzNmYtYjk3MC0yNjNiNTBkZGMzNWYiLCJqdGkiOiI0NjJmYWU0MTg3NTg0NDVkZjIzMDY0NDQzZWNjYzFiYzUyNGE4YzMxZjJhZjhkNTZmZjA4ZWQ4Mjc3NTRmODBmMTg3YmQ0MWFkMjE5NDI3NyIsImlhdCI6MTU5MjY3NTI2MSwibmJmIjoxNTkyNjc1MjYxLCJleHAiOjE2MjQyMTEyNjEsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.NEG7IX32xATNfcXhXy6kigboj5B5Qm5A2DWrvq9XQz3dvVcvybQrAf-G5dVuDmSVaAvQ5HlLAWWaG4Ji-j6uY2k-EZfwg0ljB2LvTYa2d1W4VxMjvdO2U3e5b7QccRBkyYLcN1-nORTZnjubt2IlBnK01LDJPvK7NqaIQ55axisg0F1ppSifhvnq-9VuWe-PcyEczvaEQ_0Io0k9e9JwNvendVnm3ewyFAFsXGIe_Xp-eh4jpj157hvetqRZlOOHFvFb-N25thoTERiA4zpujwnp53aoymlSK6Cs5pqVEqe9OCa_VUNKRe0kzRN5Wya13qth9Z0BBmqhguro5enJzQ_KhDTSV1OyhUp2WyLwEZ3rQVLtlSlQSaCvldrVBgtAcfuqc4B5BnT11dqhGcPQJJi7b7qy4B4UWXdKnnETz7nqsHOBwe0R14GUNkO4XOoXK6ebVf8R_b-6ooXPIj8UNlbSyW6_8YTuEHJazMlw5H9BozsZxugp-e7ubyKQl1hZ5gv7GZ1yOkCBxR8E38AmYAdYLAVxRUeoZRASEE9-Iq9ZoBvMjTTXih8rTRwTpEkk8U_Te0PdcwM_yM4SjnHl6hcpbxImnNYplmYZXFxsn4YBWG8mXzsZOn2kf8ctdHAP0v6bVoKtIF6CfyZigJrP7OVXDiEwAwIYISkOn0wf9fk`
  });
  options = {headers: this.headers};

  private url: string = "http://localhost:8000/api/posts";

  constructor(private http: HttpClient) { }

  getPost(id){
    return this.http.get(this.url + '/' + id , this.options);
  }

  editPost(post: IPost): Observable<IPost>{
    return this.http.put<IPost>(this.url + '/' + post.id ,post, this.options);

  }
}
