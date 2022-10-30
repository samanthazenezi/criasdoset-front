import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  formItem = new FormGroup({
    nomeItem: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    setor: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  salvar() {
    let body = new Item()

    body.name = this.formItem.controls.nomeItem.value;
    body.category = this.formItem.controls.categoria.value;
    body.sector = this.formItem.controls.setor.value;

    this.api.post("item", body).subscribe( response => {
      // this.snackbar.sucess("Item cadastrado com sucesso.")
    }, error => console.log("Erro ao cadastrar item.")
    )

    this.formItem.reset();
  }


}
