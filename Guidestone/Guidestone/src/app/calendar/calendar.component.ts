import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() {
    if ($.ready()) {
      console.log('ready');
    }
  }
  test1(){
    var td = document.getElementsByTagName("td");
    for(var i = 1;i<=td.length;i++) {
      var tempTd = td[i];
      tempTd.bgColor = "white";
   }
  }
  ngOnInit() {
  }
}
