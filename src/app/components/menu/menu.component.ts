import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor(
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var jsonString = localStorage.getItem('currentUser');
    var user = JSON.parse(jsonString);
    this.username = user.name;
  }

  openClose(){
    document.getElementById("botao-cadastro")?.classList.toggle("visivel")
  }
  openCloseMobile(){
    document.getElementById("mobile")?.classList.toggle("visivel")
  }
  openCloseMobile2(){
    document.getElementById("mobile2")?.classList.toggle("visivel")
  }
  sair(){
    this.router.navigateByUrl("/login");
    this.cookie.delete("token");
  }

}
