import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { Token } from 'src/app/model/token.model';
import { ApiService } from 'src/app/service/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private cookie: CookieService) { }

  ngOnInit(): void {
  }

  salvar(){

    let body = new Login()

    body.email = this.formLogin.controls.email.value;
    body.password = this.formLogin.controls.password.value;

    this.api.post("auth", body).subscribe( response => {
      let date = new Date();
      let token = response as Token;

      // cookie
      date.setHours(date.getHours() + 4);
      this.cookie.set("token", token.token, date)

      // localstorage
      var currentUser = { name: token.user, id: token.userId };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      this.router.navigateByUrl("")
    },
    error => { console.log("Usuário ou senha inválidos.")}
    )
  }

}
