import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-activity-page',
  templateUrl: './what-activity-page.component.html',
  styleUrls: ['./what-activity-page.component.scss']
})
export class WhatActivityPageComponent implements OnInit {
  feeling: string = "super sick";
  constructor() { }

  ngOnInit() {
  }

}
