import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient, private cookie: CookieService) { }
  url = environment.API_URL

  get<T>(rota: string) {
    let token = this.cookie.get("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<T>(this.url + rota, { headers: headers });
  }

  post<T>(rota: string, body: any) {
    let token = this.cookie.get("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<T>(this.url + rota, body,  { headers: headers });
  }

  delete<T>(rota: string) {
    let token = this.cookie.get("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<T>(this.url + rota,  { headers: headers });
  }

  put<T>(rota: string, body: any) {
    let token = this.cookie.get("token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<T>(this.url + rota, body,  { headers: headers });
  }

}
