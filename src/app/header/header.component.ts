import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu = ['HOME', 'SKILLS', 'PROJECTS', 'ABOUT', 'CONTACT'];

  menuClick(menu){
    menu.checked = false;
  }

}
