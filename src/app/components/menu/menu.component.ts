import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit(): void {
    var jsonString = localStorage.getItem('currentUser');
    var user = JSON.parse(jsonString);
    this.username = user.name;
  }

}
