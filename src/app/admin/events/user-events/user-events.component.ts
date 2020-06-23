import { Component, OnInit } from '@angular/core';
import { UserEventsService } from "./user-events.service";
import {IPost} from "../../posts/create-post/ipost";
import {Ievent} from "../create-event/ievent";
import {Meta, Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import {UserPostsService} from "../../posts/user-posts/user-posts.service";
@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {

  private post: IPost
  public posts = [];
  public pageOfPosts: Array<any>;

  constructor(private srvc: UserEventsService, private title: Title , private meta: Meta, private router: Router) { }


  ngOnInit(): void {
    this.title.setTitle('Your Events');
    this.meta.updateTag({ name: 'description', content: 'Users list of events' });
    this.srvc.getEvents().subscribe( data => {
      this.posts = data;
    });
  }

  deletePost(id){
    this.srvc.deleteEvent(id).subscribe(data => {
      this.router.navigate(['/admin/posts']);
      console.log("success");
    })
  }

  onChangePage(pageOfPosts: Array<any>) {
    // update current page of items
    this.pageOfPosts = pageOfPosts;
  }

}
