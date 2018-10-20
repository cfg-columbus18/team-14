import { Component, OnInit } from '@angular/core';
import { FeelingTransferServiceService } from '../feeling-transfer-service.service';
import { Router } from '@angular/router';
import { Sugg } from '../sugg';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-how-feeling-page',
  templateUrl: './how-feeling-page.component.html',
  styleUrls: ['./how-feeling-page.component.scss']
})
export class HowFeelingPageComponent implements OnInit {

  constructor(private transferService: FeelingTransferServiceService, private router: Router, private suggestion: SuggestionService) { }
  flag: boolean = true;
  feeling: string;
  index: number;
  suggest: Sugg[];
  ngOnInit() {
  }

  setFeelingHappy() {
    this.transferService.setFeeling("Happy");
    this.flag = false;
    this.feeling = "Happy";
    this.populateSuggestions();

    // this.router.navigate(['/what-activity']);
  }

  setFeelingAngry() {
    this.transferService.setFeeling("Angry");
    this.flag = false;
    this.feeling = "Angry";
    this.populateSuggestions();

    // this.router.navigate(['/what-activity']);
  }

  setFeelingSad() {
    this.transferService.setFeeling("Sad");
    this.flag = false;
    this.feeling = "Sad";
    this.populateSuggestions();

    // this.router.navigate(['/what-activity']);
  }

  setFeelingAnxious() {
    this.transferService.setFeeling("Anxious");
    this.flag = false;
    this.feeling = "Anxious";
    this.populateSuggestions();

    // this.router.navigate(['/what-activity']);
  }

  setFeelingRestless() {
    this.transferService.setFeeling("Restless");
    this.flag = false;
    this.feeling = "Restless";
    this.populateSuggestions();
    // this.router.navigate(['/what-activity']);
  }

  populateSuggestions() {
    if (this.feeling === "Sad") {
      this.index = 0;
    } else if (this.feeling === "Angry") {
      this.index = 1;
    } else if (this.feeling === "Anxious") {
      this.index = 2;
    } else if (this.feeling === "Restless") {
      this.index = 3;
    } else if (this.feeling === "Happy") {
      this.index = 4;
    }
    this.suggest = this.suggestion.getSuggestions(this.index);
  }

}
