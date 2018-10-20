import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  XP: number;

  constructor() { }

  setXP(value: number) {
    this.XP = value;
  }

  getXP() {
    return this.XP;
  }
}
