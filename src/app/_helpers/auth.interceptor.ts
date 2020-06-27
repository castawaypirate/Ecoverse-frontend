import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService : AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._authService.getToken();
    if (token){
      const cloned = request.clone({
        headers:new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Accept': 'application/json'
        })
      });
      return next.handle(cloned);
    }else{
      return next.handle(request);
    }
  }
}
