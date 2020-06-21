import { Component, OnInit } from '@angular/core';
import {UserPostsService} from "../user-posts/user-posts.service";
import {Meta, Title} from "@angular/platform-browser";
import {PostService} from "./post.service";
import {IPost} from "../create-post/ipost";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private post: IPost
  public my_post;

  constructor(private srvc: PostService, private title: Title , private meta: Meta, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.updateTag({ name: 'description', content: 'Post Content' });
    this.srvc.getPost(id).subscribe((data: IPost) => {
      console.log(data)
      this.my_post = data
    });
    document.title = this.my_post.title;
  }

}
