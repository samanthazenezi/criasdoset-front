import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private api: ApiService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  salvar() {
    let body = new Item()

    body.name = this.formItem.controls.nomeItem.value;
    body.category = this.formItem.controls.categoria.value;
    body.sector = this.formItem.controls.setor.value;

    this.api.post("item", body).subscribe( response => {
      this.openSnackBar("Item cadastrado com sucesso!", "Ok", "snackBarSucesso")
    },
    error => { this.openSnackBar("Erro ao cadastrar o Item.", "Ok", "snackBarErro")}
    )
  }

  openSnackBar(message: string, action: string, color: string) {
    this._snackBar.open(message, action, { duration: 5000, panelClass: [color] });
  }
}
