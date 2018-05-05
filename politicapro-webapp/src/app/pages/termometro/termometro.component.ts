import { Component, OnInit } from '@angular/core';

import { CountGraphData } from '../../components/mention-count-graph/mention-count-graph.component';

import { PoliticaProMetricsApiService } from '../../service/politica-pro-metrics-api-service.service';

@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.scss']
})
export class TermometroComponent implements OnInit {

  pageTitle : String = "Termometro";

  twitterCountData : CountGraphData;


  constructor(private metricsAPI : PoliticaProMetricsApiService) { }

  ngOnInit() {
    this.beginServiceFetchInterval()
  }

  beginServiceFetchInterval(){
    const intervalInSeconds = 1;
    setInterval(()=>{
      this.metricsAPI.fetchAllTimeCounts().subscribe(
        (res)=>{
          this.twitterCountData = res.data
        }
      )
    }, intervalInSeconds*1000)
  }

}
