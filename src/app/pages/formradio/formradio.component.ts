import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Radio } from 'src/app/model/radio.model';
import { ApiService } from 'src/app/service/api.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-formradio',
  templateUrl: './formradio.component.html',
  styleUrls: ['./formradio.component.css']
})
export class FormradioComponent implements OnInit {

  formRadios = new FormGroup({
    numeroRadio: new FormControl('', [Validators.required]),
    nomeColaborador: new FormControl('', [Validators.required]),
    emailColaborador: new FormControl('', [Validators.required]),
    phoneColaborador: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    capa: new FormControl('', [Validators.required]),
    antena: new FormControl('', [Validators.required]),
    cordao: new FormControl('', [Validators.required]),
    clip: new FormControl('', [Validators.required]),
    fone: new FormControl('', [Validators.required]),
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private  route: ActivatedRoute,
    private snackbar: SnackBarService
  ) { }


  ngOnInit(): void {
  }

  salvar(){
    let token = this.route.snapshot.paramMap.get("token");
    let body = new Radio;

    body.name = this.formRadios.controls.nomeColaborador.value;
    body.phone = this.formRadios.controls.phoneColaborador.value;
    body.email = this.formRadios.controls.emailColaborador.value;
    body.radioNumber = this.formRadios.controls.numeroRadio.value;
    body.department = this.formRadios.controls.departamento.value;
    body.registerDate = new Date();
    body.accessories = [];

    if (this.formRadios.controls.capa.value) {
      body.accessories.push("Capa")
    }
    if (this.formRadios.controls.antena.value) {
      body.accessories.push("Antena")
    }
    if (this.formRadios.controls.cordao.value) {
      body.accessories.push("Cordão")
    }
    if (this.formRadios.controls.clip.value) {
      body.accessories.push("Clip")
    }
    if (this.formRadios.controls.fone.value) {
      body.accessories.push("Fone")
    }

    this.api.post("radio/" + token, body).subscribe( sucess => {
      this.router.navigateByUrl("sucesso")
    },
      erro => ( this.snackbar.error("Erro ao cadastrar requerimento!"))
    )


  }

}
