import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemGuard implements CanActivate {
  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      let token = route.paramMap.get('token');
      var result = await this.api.post<boolean>("request/validate", { token: token }).toPromise()
        .then(response => { return true }, err => { return false });

      if (!result) {
        this.router.navigate(['/erro']);
      }
      return result;
  }
}

