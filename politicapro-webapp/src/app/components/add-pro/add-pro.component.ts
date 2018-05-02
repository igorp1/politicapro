import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.scss']
})
export class AddProComponent implements OnInit {

  @Input()
  word : String;

  constructor() { }

  ngOnInit() {
  }

}
