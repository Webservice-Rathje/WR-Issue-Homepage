import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail(): void {
    let name = (document.getElementById('contact-name-input') as HTMLInputElement).value;
    let subject = (document.getElementById('contact-subject-input') as HTMLInputElement).value;
    let mail = (document.getElementById('contact-mail-input') as HTMLInputElement).value;
    let msg = (document.getElementById('contact-msg-input') as HTMLTextAreaElement).value;
    fetch('https://api.wr-issue.de/sendContactMail', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        name: name,
        subject: subject,
        mail: mail,
        message: msg
      })
    }).then(res => res.json()).then(data => {
      if (data.message == 'Mail wurde erfolgreich gesendet') {
        let alert = document.getElementById('contact-alert') as HTMLDivElement;
        alert.innerHTML = 'Mail wurde erfolgreich gesendet.';
        alert.classList.add('alert', 'alert-success');
        setTimeout(() => {
          alert.innerHTML = '';
          alert.classList.remove('alert', 'alert-success');
        }, 2000);
      } else {
        let alert = document.getElementById('contact-alert') as HTMLDivElement;
        alert.innerHTML = 'Fehler beim Senden der Mail.';
        alert.classList.add('alert', 'alert-danger');
        setTimeout(() => {
          alert.innerHTML = '';
          alert.classList.remove('alert', 'alert-danger');
        }, 2000);
      }
    })
  }

}
