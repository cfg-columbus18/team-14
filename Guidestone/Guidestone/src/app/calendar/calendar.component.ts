import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() {
    window.onload = function() {
  };
  }
  test1(){
    var td = document.getElementsByTagName("td");
    for(var i = 1;i<=td.length;i++) {
      var tempTd = td[i];
      tempTd.style.color = "white";
   }
  }
  ngOnInit() {
  }
}
