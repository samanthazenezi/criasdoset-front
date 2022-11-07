import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  formUser = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    setor: new FormControl('', [Validators.required]),
    funcao: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService, private snackbar: SnackBarService) { }

  ngOnInit(): void {
  }

  salvar(){
    let body = new User();

    body.name = this.formUser.controls.nome.value;
    body.phone = this.formUser.controls.telefone.value;
    body.email = this.formUser.controls.email.value;
    body.sector = this.formUser.controls.setor.value;
    body.role = this.formUser.controls.funcao.value;

    this.api.post("user", body).subscribe( response => {
      this.snackbar.sucess("Usuário cadastrado com sucesso!")
    }, error => this.snackbar.error("Erro ao cadastrar novo usuário!"))

    this.formUser.reset();
  }

}
