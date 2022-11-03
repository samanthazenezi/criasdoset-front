import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Projeto } from 'src/app/model/projeto.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  formProjeto = new FormGroup({
    nomeProjeto: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required])
  });

  constructor(
    private api: ApiService) { }

  ngOnInit(): void {
  }

  salvar(){
    let body = new Projeto()

    body.name = this.formProjeto.controls.nomeProjeto.value;
    body.company = this.formProjeto.controls.empresa.value;
    body.creationDate = this.formProjeto.controls.data.value;
    body.description = this.formProjeto.controls.descricao.value;

    this.api.post("project", body).subscribe( response => {
      // this.snackbar.sucess("Cadastro de projeto realizado com sucesso.")
    }, error => console.log("Erro ao cadastrar projeto.")
    )

    this.formProjeto.reset();
  }





}
