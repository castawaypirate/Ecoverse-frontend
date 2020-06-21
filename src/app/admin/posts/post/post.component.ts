import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../user-posts/user-posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../create-post/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: IPost;

  constructor(private postSrv: UserPostsService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.postSrv.getPost(id).subscribe(
      res => {
        this.post = res;
      }, err => {
        this.router.navigate(['/admin/posts']);
        console.log(err);
      }
    )
  }

}
