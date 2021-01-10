import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }
  faqs: any;
  ngOnInit(): void {
    fetch('https://api.wr-issue.de/loadFAQ', {
      mode: 'cors',
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        this.faqs = data.faq;
      });
  }

  parseAnswer(answer: any): string {
    if (answer.solved == false) {
      return 'Diese Frage wurde noch nicht beantwortet.';
    } else {
      return answer.answer;
    }
  }

  askQuestion(): void {
    let question = (document.getElementById('FAQ-textarea') as HTMLTextAreaElement).value;
    fetch('https://api.wr-issue.de/askQuestion', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({question: question})
    }).then(res => res.json()).then(data => {
      location.reload();
    })
  }

}
