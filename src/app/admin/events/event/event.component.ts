import { Component, OnInit } from '@angular/core';
import { UserPostsService} from "../../posts/user-posts/user-posts.service";
import { Router, ActivatedRoute } from '@angular/router';
import { IPost} from "../../posts/create-post/ipost";
import { Title, Meta } from '@angular/platform-browser';
import {Ievent} from "../create-event/ievent";
import {UserEventsService} from "../user-events/user-events.service";
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  post: IPost;
  event: Ievent;

  constructor(private postSrv: UserPostsService, private eventSrv: UserEventsService, private title: Title , private meta: Meta, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.updateTag({ name: 'description', content: 'Event Content' });
    this.eventSrv.getEvent(id).subscribe(
      res => {
        if (!res.id) {
          this.router.navigate['/news'];
        }
        console.log(res);
        this.event = res;
        this.postSrv.getPost(this.event.post_id).subscribe(res=>{
          console.log(res);
          this.post = res;
          document.title = this.post.title;
        });

      }, err => {
        this.router.navigate['/news'];
        console.log(err);
      }
    )
  }

}
