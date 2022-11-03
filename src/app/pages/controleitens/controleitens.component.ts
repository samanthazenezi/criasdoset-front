import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-controleitens',
  templateUrl: './controleitens.component.html',
  styleUrls: ['./controleitens.component.css']
})
export class ControleitensComponent implements OnInit {

  hidden = false;

  formRadio = new FormGroup({
    email: new FormControl('', [Validators.required])
  });

  constructor( private api: ApiService ) { }

  ngOnInit(): void {
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


}
