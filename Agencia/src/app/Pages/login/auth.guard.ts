import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './Autenticacion/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthenticationService, private router: Router) {}
  public async canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let rol = this.authService.returnRole();
      if(rol == 2 || rol == 1){
        return true;
      }else{
        localStorage.clear();
        return this.router.navigate(['/login']);
      }     
  }
}

