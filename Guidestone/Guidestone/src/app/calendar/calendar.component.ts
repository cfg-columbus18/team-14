import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  bad : boolean= false;
  constructor() {
    window.onload = function() {

  };
  }
  ngOnInit() {
  }
  handleClick(){
    this.bad = !this.bad;
  }
}
