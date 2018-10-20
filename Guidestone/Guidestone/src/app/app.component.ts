import { Component , OnInit} from '@angular/core';
import { PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Component({
  selector: './achievement',
  templateUrl: './achievement/achievement.component.html',
  styleUrls: ['./achievement/achievement.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private player: PlayerService) {
  }
  ngOnInit() {
  }
  username:string = localStorage.getItem("username");

}


