import { Component, OnInit, Input } from '@angular/core';


export interface CountGraphData{
  labels: Array<string>,
  counts: Array<Number>,
  countLabel : string
}



@Component({
  selector: 'mention-count-graph',
  templateUrl: './mention-count-graph.component.html',
  styleUrls: ['./mention-count-graph.component.scss']
})
export class MentionCountGraphComponent implements OnInit {

  @Input() 
  data : CountGraphData;

  // Chart options
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartType = 'horizontalBar';
  barChartLegend = false;
  chartColors = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor() { }

  ngOnInit() { }

}




