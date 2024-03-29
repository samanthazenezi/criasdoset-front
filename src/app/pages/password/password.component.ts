import { Password } from './../../model/password.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  erro = false;

  formPassword = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: SnackBarService) { }

  ngOnInit(): void {
  }

  salvar(){

    let password = this.formPassword.controls.password.value;
    let confPassword = this.formPassword.controls.confirmPassword.value;

    if(password != confPassword) {
      this.erro = true;
    } else {
      this.erro = false;
      let body = new Password();

      body.token = this.route.snapshot.paramMap.get('token');
      body.password = this.formPassword.controls.confirmPassword.value;

      this.api.post("user/active", body).subscribe( sucess => {
          this.snackbar.sucess("Senha cadastrada com sucesso!")
          this.router.navigateByUrl("/login")
        }, error => this.snackbar.error("Erro ao cadastrar senha!")
      )

      this.formPassword.reset();
    }
    
  }

}
