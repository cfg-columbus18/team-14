import { Component, OnInit } from '@angular/core';
import { FeelingTransferServiceService } from '../feeling-transfer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-feeling-page',
  templateUrl: './how-feeling-page.component.html',
  styleUrls: ['./how-feeling-page.component.scss']
})
export class HowFeelingPageComponent implements OnInit {

  constructor(private transferService: FeelingTransferServiceService, private router: Router) { }

  ngOnInit() {
  }

  setFeelingHappy() {
    this.transferService.setFeeling("Happy");
    this.router.navigate(['/what-activity']);
  }

  setFeelingAngry() {
    this.transferService.setFeeling("Angry");
    this.router.navigate(['/what-activity']);
  }

  setFeelingSad() {
    this.transferService.setFeeling("Sad");
    this.router.navigate(['/what-activity']);
  }

  setFeelingAnxious() {
    this.transferService.setFeeling("Anxious");
    this.router.navigate(['/what-activity']);
  }

}
