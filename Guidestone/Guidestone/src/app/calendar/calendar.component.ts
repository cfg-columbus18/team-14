import { Component, OnInit } from '@angular/core';

@Component({

 selector: 'app-calendar',

 templateUrl: './calendar.component.html',

 styleUrls: ['./calendar.component.scss']

})

export class CalendarComponent implements OnInit {

 c1 : boolean= false;

 c2 : boolean= false;   c3 : boolean= false;

  c4 : boolean= false;

  c5 : boolean= false;

  c6 : boolean= false;

  c7 : boolean= false;

  cs : boolean= false;

  nd: boolean = false;

 constructor() {

}

change(){

 var currentMinute = new Date().getSeconds() / 60;

 currentMinute = Math.round(currentMinute * 100) / 100

 document.getElementById(“realTime”).innerHTML = String(currentMinute);

}

 ngOnInit() {

 }

 reset(){

   this.c1 = false;

   this.c2 = false;

   this.c3 = false;

   this.c4 = false;

   this.c5 = false;

   this.c6 = false;

   this.c7 = false;

   this.cs = false;

   this.nd = false;

 }

 handleClick(){

   this.reset();

   this.c1 = !this.c1;

   this.change();

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

 handleClick6(){

   this.reset();

   this.c6 = !this.c6;

 }

 handleClick7(){

   this.reset();

   this.c7 = !this.c7;

 }

 handleClickCS(){

   this.reset();

   this.cs = !this.cs;

   this.change();

 }

 noData(){

   this.reset();

   this.nd = !this.nd;

 }

}