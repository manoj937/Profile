import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      project: 'alrich',
      name: 'ALRICH UK CONSULTANCY',
      images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },
    {
      project: 'startup',
      name: 'STARTUP',
      images: ['1.png', '2.png', '3.png', '4.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },
    {
      project: 'innovationsquad',
      name: 'INNOVATION SQUAD',
      images: ['1.png', '2.png', '3.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },
    {
      project: 'nightowl',
      name: 'NIGHTOWLS STUDIO',
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    }
  ];
  buttons = [
  {
    name: 'GITHUB',
    icons: 'github'
  },
  {
    name: 'CODEPEN',
    icons: 'codepen'
  },
  {
    name: 'DEMO',
    icons: 'television'
  }];
  constructor() { }

  ngOnInit() {
  }

}
