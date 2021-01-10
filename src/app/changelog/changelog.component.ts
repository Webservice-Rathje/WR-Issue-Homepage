import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {
  logs: any;
  constructor() { }

  ngOnInit(): void {
    fetch('https://api.wr-issue.de/loadChangelogs', {
      method: 'GET',
      mode: 'cors'
    }).then(res => res.json())
      .then(data => {
        this.logs = data.logs.reverse();
      });
  }

  parseDate(date: any): string {
    let split = date.split('T');
    let vals = split[0].split('-');
    return vals[2] + '.' + vals[1] + '.' + vals[0];
  }

}
