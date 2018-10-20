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
  totalP:number;

  constructor(private player: PlayerService) {
    this.mindP = player.getMindfulPoints();
    this.physicalP = player.getPhysicalPoints();
    this.socialP = player.getSocialPoints();
    this.totalP = player.getTotalPoints();
   }
   updateAchievements(){
    this.mindP = this.player.getMindfulPoints();
    this.physicalP = this.player.getPhysicalPoints();
    this.socialP = this.player.getSocialPoints();
    this.totalP = this.player.getTotalPoints();
   }
  
  ngOnInit() {
  }

}
