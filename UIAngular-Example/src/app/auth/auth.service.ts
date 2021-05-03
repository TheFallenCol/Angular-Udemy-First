import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Role } from './role.enum';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { transformError } from '../common/common';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService {

  private readonly authProvider:(email:string, password: string) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(this.getItem('authStatus') || defaultAuthStatus);

  constructor(private http : HttpClient) {
    super();
    this.authStatus.subscribe(authStatus => {
      this.setItem('authStatus', authStatus);
    });
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider(email: string, password: string): Observable<IServerAuthResponse>{
    return this.http.post<IServerAuthResponse>
    (
      `${environment.tokenServiceDomain}token`,
      {
        email: email,
        password: password
      }
    );
  }

  login(email: string, password:string): Observable<IAuthStatus>{
    this.logout();
    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        this.setToken(value.accessToken);
        const result = jwtDecode(value.accessToken)
        return result as IAuthStatus;
      }),
      catchError(transformError)
    );

    loginResponse.subscribe(
      res => {
        this.authStatus.next(res);
      },
      err => {
        this.logout();
        return throwError(err);
      }
    )

    return loginResponse;
  }

  logout(){
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt:string){
    this.setItem('jwt',jwt);
  }

  getToken():string{
    return this.getItem('jwt') || '';
  }

  isValidToken(token: string){
    try{
      jwtDecode(token);
      return true;
    }catch(error){
      return false;
    }
  }

  private clearToken(){
    this.removeItem('jwt');
  }
}

export interface IAuthStatus{
  role: Role;
  primarysid: number;
  unique_name: string;
}

interface IServerAuthResponse{
  accessToken: string;
}

const defaultAuthStatus : IAuthStatus = {
  role : Role.None,
  primarysid: 0,
  unique_name: ''
}
