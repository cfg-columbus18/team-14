import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  XP: number;

  constructor() { 
    this.XP = 0;
  }

  updateXP(value: number) {
    this.XP += value;
  }

  getXP() {
    return this.XP;
  }
}
