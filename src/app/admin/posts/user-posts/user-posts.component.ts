import { Component, OnInit } from '@angular/core';
import { UserPostsService} from "./user-posts.service";
import {IPost} from "../create-post/ipost";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  private post: IPost
  public posts = [];
  public pageOfPosts: Array<any>;

  constructor(private router : Router , private srvc: UserPostsService) { }

  ngOnInit(): void {
    this.srvc.getPosts().subscribe( data => {
      console.log(data)
      this.posts = data;
    });
  }

  onChangePage(pageOfPosts: Array<any>) {
    // update current page of items
    this.pageOfPosts = pageOfPosts;
  }

}
