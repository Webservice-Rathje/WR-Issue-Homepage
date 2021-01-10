import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notAvailbleYet(): void {
    alert('Du kannst aktuell noch keine Abbonements abschließen, da sich das Projekt noch in der Beta befindet.');
  }

}
