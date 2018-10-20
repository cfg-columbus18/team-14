import { Component , OnInit} from '@angular/core';
import { PlayerService} from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  XP:number;
  constructor(private player: PlayerService) {
    
  }
  ngOnInit() {
  }

  username:string = localStorage.getItem("username");
  updateXP( xpPoint: number){
    this.player.updateXP(xpPoint);
  }

  setXPBar(){
    this.XP = this.player.getXP();
  }

  
  increase() {
    var width = +(<HTMLInputElement>document.getElementById("myBar")).innerText;

    if (width >= 100) {
      width = 0;
    } else {
         width+= 20;
         
       }
       (<HTMLInputElement>document.getElementById("myBar")).innerText = width + '';
           document.getElementById("myBar").style.width = width + '%';

  }


}
