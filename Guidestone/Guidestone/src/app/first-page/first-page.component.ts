import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  constructor(private router: Router) { }

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

}


