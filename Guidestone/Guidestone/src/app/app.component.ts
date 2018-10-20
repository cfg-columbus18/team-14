import { Component , OnInit} from '@angular/core';
import { PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private player: PlayerService) {
    XP:var;
  }
  ngOnInit() {
  }

  username:string = localStorage.getItem("username");

  getXP(){
    xp = this.player.getXP();
  }

}
