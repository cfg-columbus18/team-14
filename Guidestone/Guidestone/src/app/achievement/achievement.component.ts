import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../suggestion.service';
import { PlayerService} from '../player.service'
@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {
  mindP:number;
  physicalP:number;
  socialP:number;


  constructor(private player: PlayerService) {
   }
  
  ngOnInit() {
  }

}
