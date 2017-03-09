import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
arr = [{name:"Walla",id:"1",link:"http://www.walla.co.il"},{name:"Nana",id:"2",link:"http://www.nana.co.il"},{name:"Yad2",id:"3",link:"http://www.yad2.co.il"}]

  constructor() { }

  ngOnInit() {
  }

}
