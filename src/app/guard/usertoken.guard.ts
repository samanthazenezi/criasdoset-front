import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsertokenGuard implements CanActivate {

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let token = route.paramMap.get('token');
      let retorno = false;
      this.api.post("user/valid-token", { token: token }).subscribe( sucess => {
        retorno = true;
      }, error => { 
        retorno = false;
        this.router.navigateByUrl("erro")
      })

      return retorno

  }
  
}
