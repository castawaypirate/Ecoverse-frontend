import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../admin/posts/create-post/ipost';
import { UserPostsService } from '../admin/posts/user-posts/user-posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  posts: IPost[];

  constructor(private title: Title, private meta: Meta, private postSrv: UserPostsService) { }

  ngOnInit(): void {
    this.title.setTitle('News');
    this.meta.updateTag({ name: 'description', content: 'Events, Announcements, Articles, Warnings, News Page'});
    this.postSrv.getAllPosts().subscribe(
      res => {
        this.posts = res;
      }, err => {
        console.log(err);
      }
    )
  }

}
