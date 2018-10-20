import { Component, OnInit } from '@angular/core';
import { FeelingTransferServiceService } from '../feeling-transfer-service.service';
import { Router } from '@angular/router';
import { Sugg } from '../sugg';
import { SuggestionService } from '../suggestion.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-how-feeling-page',
  templateUrl: './how-feeling-page.component.html',
  styleUrls: ['./how-feeling-page.component.scss']
})
export class HowFeelingPageComponent implements OnInit {

  constructor(private player: PlayerService, private transferService: FeelingTransferServiceService, private router: Router, private suggestion: SuggestionService) { }
  flag: boolean = true;
  feeling: string;
  index: number;
  suggest: Sugg[];
  suggestion1: string;
  why1: string;
  type: number;
  suggestion2: string;
  why2: string;

  suggestion3: string;
  why3: string;

  whyFlag1: boolean = true;
  whyFlag2: boolean = true;
  whyFlag3: boolean = true;


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

    console.log(this.suggest);
    this.suggestion1 = this.suggest[0].activity;
    this.why1 = this.suggest[0].why;
    this.suggestion2 = this.suggest[1].activity;
    this.why2 = this.suggest[1].why;
    this.suggestion3 = this.suggest[2].activity;
    this.why3 = this.suggest[2].why;
  }

  goBack() {
    this.flag = true;
  }

  updatePoints(num: number) {
    if (num == 1) {
      this.type = this.suggest[0].type;
      this.player.updatePoints(this.type);
    } else if (num == 2) {
      this.type = this.suggest[1].type;
      this.player.updatePoints(this.type);

    } else if (num == 3) {
      this.type = this.suggest[2].type;
      this.player.updatePoints(this.type);

    }
  }

  flipFlag(num: number) {
    if (num == 1) this.whyFlag1 = !this.whyFlag1;
    else if (num == 2) this.whyFlag2 = !this.whyFlag2;
    else if (num == 3) this.whyFlag3 = !this.whyFlag3;
  }

}
