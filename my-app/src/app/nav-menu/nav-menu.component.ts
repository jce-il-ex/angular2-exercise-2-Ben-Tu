import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


  nav_item= [
    {
      txt:'home'
    },
    {
      txt:'workshop'
    },
    {
      txt:'setting'
    },
    {
      txt:'help'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
