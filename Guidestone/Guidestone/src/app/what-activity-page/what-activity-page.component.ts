import { Component, OnInit } from '@angular/core';
import { FeelingTransferServiceService } from '../feeling-transfer-service.service';
import { SuggestionService } from '../suggestion.service';
import { Sugg } from '../sugg';
import { delay } from 'q';

@Component({
  selector: 'app-what-activity-page',
  templateUrl: './what-activity-page.component.html',
  styleUrls: ['./what-activity-page.component.scss']
})
export class WhatActivityPageComponent implements OnInit {
  constructor(private transferService: FeelingTransferServiceService, private suggestion: SuggestionService) {
    
   }
  feeling: string = this.transferService.getFeeling();
  index: number;
  suggest: Sugg[];
  ngOnInit() {
    
 
  }

}
