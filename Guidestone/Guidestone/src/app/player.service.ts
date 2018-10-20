import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  XP: number;
  TotalPoints:number; 
  MindfulPoints:number; 
  PhysicalPoints:number; 
  SocialPoints:number;
  level:number;
  avatar:string;
  constructor() { 
    this.XP = 0;
    this.MindfulPoints=0; 
    this.PhysicalPoints=0; 
    this.SocialPoints=0; 
    this.level=0;
    this.avatar = "assets/hippo.svg"
  }

  updateXP(value: number) {
    this.XP += value;
  }


  updateMindfulPoints(value: number){ 
    this.MindfulPoints+=value;
    this.XP+=value*7; 
  }

  updatePhysicalPoints(value: number){ 
    this.PhysicalPoints+=value;
    this.XP+=value *6;
  }

  updateSocialPoints(value: number){ 
    this.SocialPoints+=value
    this.XP += value * 8;
  }

    getTotalPoints() { 
      return this.XP; 
    }
    getMindfulPoints(){ 
      return this.MindfulPoints;
    }

    getPhysicalPoints(){ 
      return this.PhysicalPoints; 
    }
    getSocialPoints(){
      return this.SocialPoints;
    }

    updatePoints(num: number) {
      if (num == 1) {
        this.updatePhysicalPoints(15);
        this.increase(35);
      } else if (num == 2) {
        this.updateMindfulPoints(15);
        this.increase(25);
      } else if (num == 3) {
        this.updateSocialPoints(15);
        this.increase(15);
      }
    }
      
  increase(value:number) {
    var width = +(<HTMLInputElement>document.getElementById("myBar")).innerText;

    if (width >= 100) {
      width = 0;
    } else {

         width+= value;
         if (width >= 100){
           this.level += 1;
           width = 100;
         }
       }
      (<HTMLInputElement>document.getElementById("myBar")).innerText = width + '';
           document.getElementById("myBar").style.width = width + '%';
           document.getElementById("level").innerText = "Level: " + this.level.toString();
           
       
  }
  getLevel(){
    return this.level;
  }
  getXP() {
    return this.XP;
  }
  updateAvatar(value:string) {
    this.avatar = value;
  }
  getAvatar(){
    return this.avatar;
  }
}
