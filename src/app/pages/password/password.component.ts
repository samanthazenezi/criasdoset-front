import { Password } from './../../model/password.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  formPassword = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private api: ApiService,
    private snackbar: SnackBarService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  salvar(){
    let body = new Password();

    body.token = this.route.snapshot.paramMap.get('token');
    body.password = this.formPassword.controls.confirmPassword.value;

    this.api.post("user/active", body).subscribe( sucess => {
      this.snackbar.sucess("Senha cadastrada com sucesso")
    }, error => this.snackbar.error("Erro ao cadastrar senha.")
    )
    
    this.formPassword.reset();
  }

}
