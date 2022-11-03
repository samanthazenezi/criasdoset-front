import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formradio',
  templateUrl: './formradio.component.html',
  styleUrls: ['./formradio.component.css']
})
export class FormradioComponent implements OnInit {

  formRadios = new FormGroup({
    numero: new FormControl('', [Validators.required]),
    nomeColaborador: new FormControl('', [Validators.required]),
    emailColaborador: new FormControl('', [Validators.required]),
    phoneColaborador: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  salvar(){

  }

}
