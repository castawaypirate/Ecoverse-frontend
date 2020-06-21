import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http'
import { IUser } from '../_interfaces/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IAuth } from '../_interfaces/auth';
import { IUserdata } from '../_interfaces/userdata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = environment.apiUrl + '/users';

  constructor(private http: HttpClient, private authServ: AuthService) { }

  getUser(): Observable<IUser>{
    // const headers={
    //   'Authorization': 'Bearer '+this.authServ.getToken(),
    //   'Accept': 'application/json'
    // };
    // const requestOptions = {
    //   headers: new HttpHeaders(headers),
    // };
    return this.http.get<IUser>(this._url + '/authenticated');
  }

  getUserData(id): Observable<IUserdata> {
    return this.http.get<IUserdata>(this._url + '/data/' + id);
  }

  addUser(user: IUser): Observable<IAuth> {
    return this.http.post<IAuth>(this._url + '/create', user);
  }

  updateUser(user: IUser, data):any {
    // let httpParams = new HttpParams().set('password', 'password');
    // let options = { params: httpParams };
    return this.http.put<any>(this._url + '/',data);
  }

  deleteUser(user: IUser, password):any {
    let httpParams = new HttpParams().set('password', password);
    let options = { params: httpParams };
    return this.http.delete<any>(this._url + '/' + user.id,options);
  }
}
