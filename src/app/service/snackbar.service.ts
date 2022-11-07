import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  sucess(message: string) {
    this._snackBar.open(message, "Ok", { duration: 5000, panelClass: ['snackBarSucesso'] });
  }

  error(message: string) {
    this._snackBar.open(message, "Ok", { duration: 5000, panelClass: ['snackBarErro'] });
  }

  warnig(message: string) {
    this._snackBar.open(message, "Ok", { duration: 5000, panelClass: ['snackBarAtencao'] });
  }

}
