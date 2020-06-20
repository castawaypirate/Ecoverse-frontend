import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http'
import { IUser } from '../_interfaces/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IAuth } from '../_interfaces/auth';
import { IUserdata } from '../_interfaces/userdata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient, private authServ: AuthService) { }

  getUser(): Observable<IUser>{
    // const headers={
    //   'Authorization': 'Bearer '+this.authServ.getToken(),
    //   'Accept': 'application/json'
    // };
    // const requestOptions = {
    //   headers: new HttpHeaders(headers),
    // };
    return this.http.get<IUser>(this._url);
  }

  getUserData(id): Observable<IUserdata> {
    return this.http.get<IUserdata>('http://localhost:8000/api/users/data/' + id);
  }

  addUser(user: IUser): Observable<IAuth> {
    return this.http.post<IAuth>('http://localhost:8000/api/users/create', user);
  }

  updateUser(user: IUser, params):any {
    // let httpParams = new HttpParams().set('password', 'password');
    // let options = { params: httpParams };
    return this.http.put<any>('http://localhost:8000/api/users/' + user.id+params,{});
  }

  deleteUser(user: IUser, password):any {
    let httpParams = new HttpParams().set('password', password);
    let options = { params: httpParams };
    return this.http.delete<any>('http://localhost:8000/api/users/' + user.id,options);
  }
}
