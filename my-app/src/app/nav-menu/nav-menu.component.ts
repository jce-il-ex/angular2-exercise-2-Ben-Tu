import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

constructor() { }

  nav_item= [
    {
      id :'1',
      txt:'home'
    },
    {
      id :'2',
      txt:'workshop'
    },
    {
      id :'3',
      txt:'setting'
    },
    {
      id :'4',
      txt:'help'
    }
  ];

  

  ngOnInit() {
  }

}
