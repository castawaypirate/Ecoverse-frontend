import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IAuth } from '../_interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<IAuth>{
    return this.http.post<any>("http://localhost:8000/api/users/login",{username,password});
  }
}
