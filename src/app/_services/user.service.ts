import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from '../_interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "http://localhost:8000/api/users/4";

  constructor(private http : HttpClient) { }

  getUsers(): Observable<IUser>{
    return this.http.get<IUser>(this._url);
  }

  addUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>("http://localhost:8000/api/users/create",user);
  }
}
