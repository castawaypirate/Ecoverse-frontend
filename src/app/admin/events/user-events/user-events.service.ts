import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {IPost} from "../../posts/create-post/ipost";
import { Ievent} from "../create-event/ievent";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserEventsService {

  private url: string = environment.apiUrl + "/events";

  constructor(private http: HttpClient) { }

  getEvent(id) {
    return this.http.get<Ievent>(this.url + '/' + id);
  }

  getEvents(){
    return this.http.get<IPost[]>(this.url + '/author');
  }

  deleteEvent(id){
    return this.http.delete(this.url + '/' + id);
  }
}
