import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../user-posts/user-posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../create-post/ipost';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: IPost;

  constructor(private postSrv: UserPostsService, private title: Title , private meta: Meta, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.updateTag({ name: 'description', content: 'Post Content' });
    this.postSrv.getPost(id).subscribe(
      res => {
        this.post = res;
        document.title = this.post.title;
      }, err => {
        this.router.navigate(['/admin/posts']);
        console.log(err);
      }
    )
  }

}
