import { AuthService, IAuthStatus } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  protected currentAuthStatus: IAuthStatus | null = null;

  constructor(private authService: AuthService, private router: Router){
    this.authService.authStatus.subscribe(authStatus =>
      this.currentAuthStatus = (this.authService.getAuthStatus())
    )
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkPermissions(childRoute);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermissions(route);
  }

  protected checkLogin(): boolean{
    if(this.authService.getToken() == null || this.authService.getToken() === ''){
      alert("You must login to continue");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  protected checkPermissions(route?: ActivatedRouteSnapshot):boolean{
    let roleMatch: boolean = false;
    let params: any;

    if(route){
      const expectedRole:Role[] = route.data.expectedRole;
      if(expectedRole){
        expectedRole.forEach(element => {
            if(element == this.currentAuthStatus?.role){
              roleMatch = true;
            }
          }
        )
      }
    }

    if(!roleMatch){
      alert('You do not have permissions to view this resource');
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}
