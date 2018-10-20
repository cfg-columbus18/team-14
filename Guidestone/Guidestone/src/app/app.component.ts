import { Component , OnInit} from '@angular/core';
import { PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  avatar:string
  constructor(private player: PlayerService) {
    this.avatar = player.getAvatar();
  }
  getNotification(evt) {
    this.avatar = evt;
    console.log(evt);
    console.log(this.avatar);
  } 
  ngOnInit() {
  }
  username:string = localStorage.getItem("username");

}


