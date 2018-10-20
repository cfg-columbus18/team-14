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
  constructor() { 
    this.XP = 0;
    this.MindfulPoints=0; 
    this.PhysicalPoints=0; 
    this.SocialPoints=0; 
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
      } else if (num == 2) {
        this.updateMindfulPoints(15);
      } else if (num == 3) {
        this.updateSocialPoints(15);
      }
    }

  getXP() {
    return this.XP;
  }
}
