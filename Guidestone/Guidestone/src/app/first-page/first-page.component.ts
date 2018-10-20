import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  saveName() {
    let username= ((document.getElementById("username") as HTMLInputElement).value);
    localStorage.setItem("username",username) //JSON.stringify({token:"name", name: username}
    alert("Hello " + username);
  }
}


