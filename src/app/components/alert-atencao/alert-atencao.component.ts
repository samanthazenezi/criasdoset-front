import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-atencao',
  templateUrl: './alert-atencao.component.html',
  styleUrls: ['./alert-atencao.component.css']
})
export class AlertAtencaoComponent implements OnInit {

  @Input() atencao: string

  constructor() { }

  ngOnInit(): void {
  }

}
