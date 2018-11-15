import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  pageTitle : string = "Política";
  pageSubtitle : string = "";

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goTo(link : string, email : boolean = false){
    if(email){
      window.location.href = `mailto:${link}`;
    }
    else{
      this.router.navigateByUrl(link);
    }
    
  }

}
