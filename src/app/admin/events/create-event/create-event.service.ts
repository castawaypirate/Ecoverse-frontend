import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {Ievent} from "./ievent";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  private url: string = environment.apiUrl + "/events";

  constructor(private http: HttpClient) { }

  addEvent(event: Ievent): Observable<Ievent>{
    const data = new FormData();
    for ( const key in event ) {
      data.append(key, event[key]);
    }
    return this.http.post<Ievent>(this.url,data);
  }
}
