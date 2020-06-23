import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../user-posts/user-posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../create-post/ipost';
import { Title, Meta } from '@angular/platform-browser';
import { AuthService } from 'src/app/_services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from './comment.service';

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
  comment_id= null;
  user;
  parentComms;
  commentForm = this.fb.group({
    content: ['', Validators.required]
  });

  answerForm = this.fb.group({
    content: ['', Validators.required]
  });

  constructor(private postSrv: UserPostsService, private title: Title , private meta: Meta, private router: Router, 
    private actRoute: ActivatedRoute, private authSrv: AuthService, private fb: FormBuilder, private commentSrv: CommentService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.updateTag({ name: 'description', content: 'Post Content' });
    this.postSrv.getPost(id).subscribe(
      res => {
        this.post = res;
        console.log(this.post);
        document.title = this.post.title;
        if (this.authSrv.isAuth()) {
          this.auth = true;
          this.user = this.authSrv.getUser();
          if (this.post.likes_users_ids.includes(this.user.id)) {
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

  comment() {
    if (this.commentForm.valid) {
      this.post.comments.unshift({
        author: {
          username: this.authSrv.getUser().username,
        },
        content: this.commentForm.controls.content.value
      });
      this.commentSrv.addCommentToPost(this.post.id, this.commentForm.value)
        .subscribe(
          res => {
            console.log(res);
          }, err => {
            console.log(err);
          }
        );
    }
  }

  answerComment() {
    const comment = ({
      author: {
        username: this.authSrv.getUser().username,
      },
      content: this.answerForm.controls.content.value
    });
    this.parentComms.unshift(comment);
    console.log(this.comment_id);
    if (this.answerForm.valid) {
      this.commentSrv.addAnswerComment(this.comment_id, this.answerForm.value)
        .subscribe(
          res => {
            console.log(res);
          }, err => {
            console.log(err);
          }
        );
        this.hideAnswer();
      }
  }

  showAnswer(comments, comment) {
    console.log(comment);
    this.parentComms = comments;
    this.comment_id = comment.id;
  }

  hideAnswer() {
    this.comment_id = null;
  }
}
