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
      const result = this.api.post<boolean>("user/valid-token", { token: token })      
      .subscribe( sucess => {
        return true;
      }, error => { 
        return false;
      })

      if (!result) {
        this.router.navigateByUrl("erro");
      }
      else {
        return true;
      }
  }
  
}
