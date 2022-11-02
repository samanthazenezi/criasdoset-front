import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-erro',
  templateUrl: './alert-erro.component.html',
  styleUrls: ['./alert-erro.component.css']
})
export class AlertErroComponent implements OnInit {

  @Input() erro: string

  constructor() { }

  ngOnInit(): void {
  }

}
