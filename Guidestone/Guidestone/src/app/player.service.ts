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
    this.xp+=value*7; 
  }

  updatePhysicalPoints(value: number){ 
    this.PhysicalPoints+=value;
    this.XP+=value;
  }

  updateSocialPoints(value: number){ 
    this.SocialPoints+=value
  }

    getTotalPoints() { 
      return this.TotalPoints; 
    }
    getMindfulPoints(){ 
      return this.MindfulPoints;
    }

    getPhysicalPoints(){ 
      return this.PhysicalPoints; 
    }



  getXP() {
    return this.XP;
  }
}
