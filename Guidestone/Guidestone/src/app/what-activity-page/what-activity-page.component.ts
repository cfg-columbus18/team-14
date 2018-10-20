import { Component, OnInit } from '@angular/core';
import { FeelingTransferServiceService } from '../feeling-transfer-service.service';

@Component({
  selector: 'app-what-activity-page',
  templateUrl: './what-activity-page.component.html',
  styleUrls: ['./what-activity-page.component.scss']
})
export class WhatActivityPageComponent implements OnInit {
  constructor(private transferService: FeelingTransferServiceService) { }

  ngOnInit() {
    
  }

  feeling: string = this.transferService.getFeeling();;

}
