import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [{
    name: 'HTML',
    img: 'html'
  }, {
    name: 'CSS(LESS/SASS)',
    img: 'css'
  }, {
    name: 'JAVASCRIPT',
    img: 'js'
  }, {
    name: 'JQUERY',
    img: 'jquery'
  }, {
    name: 'TYPESCRIPT',
    img: 'ts'
  }, {
    name: 'REACTIVE X',
    img: 'rxjs'
  }, {
    name: 'GULP',
    img: 'gulp'
  },{
    name: 'BOOTSTRAP',
    img: 'bootstrap'
  }, {
    name: 'ANGULAR',
    img: 'angular'
  }, {
    name: 'IONIC',
    img: 'ionic'
  }, {
    name: 'PWA',
    img: 'pwa'
  }, {
    name: 'FIREBASE',
    img: 'firebase'
  }, {
    name: 'NODEJS',
    img: 'nodejs'
  }, {
    name: 'PYTHON',
    img: 'Python'
  }];

  constructor() { }

  ngOnInit() {
  }
}
