import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeelingTransferServiceService {

  feeling: string = "awesome";
  
  constructor() { }

  setFeeling(value: string) {
    this.feeling = value;
  }

  getFeeling(): string {
    return this.feeling;
  }
}
