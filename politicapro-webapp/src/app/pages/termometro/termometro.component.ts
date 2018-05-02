import { Component, OnInit } from '@angular/core';

import { CountGraphData } from '../../components/mention-count-graph/mention-count-graph.component';

@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.scss']
})
export class TermometroComponent implements OnInit {

  pageTitle : String = "Termometro";

  twitterCountData : CountGraphData = {
    labels: ['Lula', 'Bolsonaro', 'Joaquim Barbosa', 'Aécio Neves'],
    counts: [65, 59, 80, 81],
    countLabel: 'Tweet count'
  } 


  constructor() { }

  ngOnInit() {
  }

}
