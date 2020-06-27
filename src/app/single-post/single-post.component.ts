import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../admin/posts/create-post/ipost';
import { AuthService } from '../_services/auth.service';
import { UserPostsService } from '../admin/posts/user-posts/user-posts.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() post:IPost;
  auth = false;
  liked = false;
  likes;

  constructor(private authSrv: AuthService, private postSrv: UserPostsService) { }

  ngOnInit(): void {
    this.likes = this.post.likes_count;
    if (this.authSrv.isAuth()) {
      this.auth = true;
      if (this.post.likes_users_ids.includes(this.authSrv.getUser().id)) {
        this.liked = true;
      }
    }
  }

  handleLike() {
    this.postSrv.handleLike(this.post.id)
      .subscribe(
        res => {
          this.liked = !this.liked;
          this.liked ? this.likes++ : this.likes--;
        }, err => {
          console.log(err);
        }
      );
  }
}
