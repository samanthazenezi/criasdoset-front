import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-radio',
  templateUrl: './cadastro-radio.component.html',
  styleUrls: ['./cadastro-radio.component.css']
})
export class CadastroRadioComponent implements OnInit {

  formRadios = new FormGroup({
    numero: new FormControl('', [Validators.required]),
    nomeColaborador: new FormControl('', [Validators.required]),
    emailColaborador: new FormControl('', [Validators.required]),
    phoneColaborador: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){}

}
