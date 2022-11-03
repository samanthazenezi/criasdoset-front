import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controleitens',
  templateUrl: './controleitens.component.html',
  styleUrls: ['./controleitens.component.css']
})
export class ControleitensComponent implements OnInit {

  hidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  addEmail(){
    this.hidden = true;
  }

  enviarEmail(){

  }

  cancelar(){
    this.hidden = false; 

    // reset form
  }


}
