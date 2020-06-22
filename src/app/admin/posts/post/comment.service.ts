import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = environment.apiUrl + '/';

  constructor(private http: HttpClient) { }

  addCommentToPost(post_id, data) {
    return this.http.post<any>(this.url + 'posts/' + post_id + '/add_comment', data);
  }

  addAnswerComment(comment_id, data) {
    return this.http.post<any>(this.url + 'comments/' + comment_id + '/createAnswer', data);
  }
}
