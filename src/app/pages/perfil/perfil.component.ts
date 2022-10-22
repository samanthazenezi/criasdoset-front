import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/model/perfil.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil?: Perfil;
  perfilTitle?: string;

  formPerfil = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    setor: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.api.get<Perfil>("user/" + currentUser.id).subscribe(response => {
      this.perfil = response;
      this.perfilTitle = "Perfil > " + this.perfil.name

      this.formPerfil.controls.nome.setValue(this.perfil.name);
      this.formPerfil.controls.telefone.setValue(this.perfil.phone);
      this.formPerfil.controls.email.setValue(this.perfil.email);
      this.formPerfil.controls.setor.setValue(this.perfil.sector);
      this.formPerfil.disable();
    })
  }

}
