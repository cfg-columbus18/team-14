import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  txt:string;
  constructor(private router: Router, private player: PlayerService) { }

  ngOnInit() {
  }
  saveName() {
    let username= ((document.getElementById("username") as HTMLInputElement).value);
    if (username == ""){
      username = "User";
    }

    localStorage.setItem("username",username);
    // localStorage.setItem("fitness",fitness);
    // alert(fitness);
    this.router.navigate(['/how-feeling']);
  }
  changeAvatar(value: number){

    if (value == 1){
      this.player.updateAvatar("assets/bulldog.svg");
      this.txt = this.player.getAvatar();
    } else if (value == 2){
      this.player.updateAvatar("assets/llama.svg");
      this.txt = this.player.getAvatar();

    }else if (value == 3){
      this.player.updateAvatar("assets/mouse.svg");
      this.txt = this.player.getAvatar();

    }else if (value == 4){
      this.player.updateAvatar("assets/squirrel.svg");
      this.txt = this.player.getAvatar();

    }
    this.notifyParent.emit(this.txt);
  }


}


