import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Radio } from 'src/app/model/radio.model';
import { ApiService } from 'src/app/service/api.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-controleitens',
  templateUrl: './controleitens.component.html',
  styleUrls: ['./controleitens.component.css']
})
export class ControleitensComponent implements OnInit {

  dropdowPesquisa = false;
  modal = false;
  hidden = false;
  radios: Radio[] = [];
  idSelecionado = null;

  formRadio = new FormGroup({
    email: new FormControl('', [Validators.required])
  });

  formStatus = new FormGroup({
    status: new FormControl('', [Validators.required])
  });

  constructor( private api: ApiService, private snackbar: SnackBarService ) { }

  ngOnInit(): void {
    this.api.get<Radio[]>("radio").subscribe( response => {
      this.radios = response;
    }, erro => { this.snackbar.error("Erro ao salvar!")})
  }

  addEmail(){
    this.hidden = true;
  }

  enviarEmail(){
    let emailform = this.formRadio.controls.email.value;
    let body = { email: emailform}

    this.api.post("request/radio", body).subscribe( sucess => {
      this.snackbar.sucess("E-mail enviado com sucesso!")
      this.formRadio.reset();
    },
    error => { this.snackbar.error("Erro ao enviar e-mail!")} )
  }

  cancelar(){
    this.hidden = false;

    this.formRadio.reset();
  }

  abrirDropdow(){
    this.dropdowPesquisa = true;
  }

  openClose(id: string){
    this.modal = !this.modal;

    if(id == null){
      return;
    } else {
      this.idSelecionado = id;
    }
  }

  salvar(){
    let status = {
      status: this.formStatus.controls.status.value
    };

    this.api.put('radio/' + this.idSelecionado, status).subscribe( response => {
      this.modal = false;
      window.location.reload();
    }, erro => { this.snackbar.error("Erro ao alterar status!")})
  }


}
