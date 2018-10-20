import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  c1 : boolean= false;
  c2 : boolean= false;
  //new
   c3 : boolean= false;
   c4 : boolean= false;
   c5 : boolean= false;
  constructor() {
}
  ngOnInit() {
  }
  reset(){
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    this.c5 = false;
  }
  handleClick(){
    this.reset();
    this.c1 = !this.c1;
  }
  handleClick2(){
    this.reset();
    this.c2 = !this.c2;
  }
  handleClick3(){
    this.reset();
    this.c3 = !this.c3;
  }
  handleClick4(){
    this.reset();
    this.c4 = !this.c4;
  }
  handleClick5(){
    this.reset();
    this.c5 = !this.c5;
  }
}
