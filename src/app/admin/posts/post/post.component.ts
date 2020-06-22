import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../user-posts/user-posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../create-post/ipost';
import { Title, Meta } from '@angular/platform-browser';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: IPost;
  liked = false;
  likes;
  auth = false;

  constructor(private postSrv: UserPostsService, private title: Title , private meta: Meta, private router: Router, 
    private actRoute: ActivatedRoute, private authSrv: AuthService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.updateTag({ name: 'description', content: 'Post Content' });
    this.postSrv.getPost(id).subscribe(
      res => {
        this.post = res;
        document.title = this.post.title;
        if (this.authSrv.isAuth()) {
          this.auth = true;
          if (this.post.likes_users_ids.includes(this.authSrv.getUser().id)) {
            this.liked = true;
          }
        }
        this.likes = this.post.likes_count;
      }, err => {
        this.router.navigate(['/admin/posts']);
        console.log(err);
      }
    );
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
