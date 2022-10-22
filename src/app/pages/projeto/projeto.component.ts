import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
