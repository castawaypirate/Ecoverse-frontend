import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl + '/rss').subscribe(
      res => {
        this.posts = res;
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }

}
