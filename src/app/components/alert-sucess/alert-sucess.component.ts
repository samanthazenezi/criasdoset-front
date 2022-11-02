import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-sucess',
  templateUrl: './alert-sucess.component.html',
  styleUrls: ['./alert-sucess.component.css']
})
export class AlertSucessComponent implements OnInit {

  @Input() sucess: string

  constructor() { }

  ngOnInit(): void {
  }

}
