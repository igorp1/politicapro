import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.scss']
})
export class NavContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // text
  menu : any = {
    title : "Política",
    links : [
      {'icon':'info', 'label':"About", 'href':"/about"},
      {'icon':'poll', 'label':"Termometro", 'href':"/termometro"},
      {'icon':'developer_mode', 'label':"API", 'href':"/devs"},
      /* more */
    ]
  };


  // control vars
  menuOpen : boolean = false;
  toggleMenu(){this.menuOpen = !this.menuOpen;}
  
}
