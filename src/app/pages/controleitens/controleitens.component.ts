import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Radio } from 'src/app/model/radio.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-controleitens',
  templateUrl: './controleitens.component.html',
  styleUrls: ['./controleitens.component.css']
})
export class ControleitensComponent implements OnInit {

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

  constructor( private api: ApiService ) { }

  ngOnInit(): void {
    this.api.get<Radio[]>("radio").subscribe( response => {
      this.radios = response;
    }, erro => { console.log("erro!")})
  }

  addEmail(){
    this.hidden = true;
  }

  enviarEmail(){
    let emailform = this.formRadio.controls.email.value;
    let body = { email: emailform}

    this.api.post("request/radio", body).subscribe( sucess => {
      console.log("form enviado")
      this.formRadio.reset();
    },
    error => { console.log("errooor")} )
  }

  cancelar(){
    this.hidden = false;

    this.formRadio.reset();
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
      console.log("OK");
    }, erro => { console.log("erro")})
  }


}
