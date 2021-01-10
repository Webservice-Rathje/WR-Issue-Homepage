import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForBeta(): void {
    let name = (document.getElementById('home-beta-name-input') as HTMLInputElement).value;
    let email = (document.getElementById('home-beta-email-input') as HTMLInputElement).value;
    let orga = (document.getElementById('home-beta-orga-input') as HTMLInputElement).value;
    let msg = (document.getElementById('home-beta-msg-input') as HTMLTextAreaElement).value;
    fetch('https://api.wr-issue.de/registerForBeta', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        organisation: orga,
        message: msg
      })
    }).then(res => {
      location.reload();
    })
  }

  registerForTestversion(): void {
    let name = (document.getElementById('home-beta-name-input') as HTMLInputElement).value;
    let email = (document.getElementById('home-beta-email-input') as HTMLInputElement).value;
    let orga = (document.getElementById('home-beta-orga-input') as HTMLInputElement).value;
    let msg = (document.getElementById('home-beta-msg-input') as HTMLTextAreaElement).value;
    fetch('https://api.wr-issue.de/registerForTestVersion', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        organisation: orga,
        message: msg
      })
    }).then(res => {
      location.reload();
    })
  }

}
