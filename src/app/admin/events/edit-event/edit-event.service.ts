import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ievent } from "../create-event/ievent";
import {environment} from "../../../../environments/environment";
import {IPost} from "../../posts/create-post/ipost";

@Injectable({
  providedIn: 'root'
})
export class EditEventService {

  private url: string = environment.apiUrl + "/events";

  constructor(private http: HttpClient) { }

  getEvent(id){
    return this.http.get(this.url + '/' + id);
  }

  editEvent(event: Ievent): Observable<Ievent>{
    const data = new FormData();
    for ( const key in event ) {
      data.append(key, event[key]);
    }
    return this.http.post<Ievent>(this.url + '/' + event.id ,data);
  }
}
