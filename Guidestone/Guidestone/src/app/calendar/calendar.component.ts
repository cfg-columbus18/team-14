import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() {
    window.onload = function() {
      var td = document.getElementsByTagName("td");
      for(var i = 1;i<=31;i++) {
        var tempTd = td[i];
        tempTd.style.backgroundColor = "white";
     }
  };
  }
  ngOnInit() {
  }
}
