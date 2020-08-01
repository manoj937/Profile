import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      project: 'astrology',
      name: 'DHARSHINI ASTROLOGICAL RESEARCH CENTER',
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },{
      project: 'alrich',
      name: 'ALRICH UK CONSULTANCY',
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },
    {
      project: 'nightowl',
      name: 'NIGHTOWLS STUDIO',
      images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },
    {
      project: 'startup',
      name: 'STARTUP',
      images: ['1.png', '2.png', '3.png', '4.png'],
      domain: ['html', 'sass', 'ts', 'bootstrap', 'angular']
    },{
      project: 'livefree',
      name: 'LIVEFREE',
      images: ['1.png'],
      domain: ['html', 'sass', 'ts', 'angular']
    },
    {
      project: 'innovationsquad',
      name: 'INNOVATION SQUAD',
      images: ['1.png', '2.png', '3.png'],
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
