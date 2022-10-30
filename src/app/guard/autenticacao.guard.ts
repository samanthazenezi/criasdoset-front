import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(
    private cookie: CookieService,
    private route: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = this.cookie.check("token");

      if (token) {
        return true
      } else {
        // this.openSnackBar("Sua sessão expirou! Faça o login novamente.", "Ok")
        this.route.navigateByUrl("login")
        return false
      }
  }

 
}
