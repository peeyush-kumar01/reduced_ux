
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  money: { [index: string]: string } = {
    USD: 'fa-dollar-sign',
    INR: 'fa-rupee-sign',
    EUR: 'fa-euro-sign',
    GBP: 'fa-pound-sign',
    JPY: 'fa-yen-sign',
    ILS: 'fa-shekel-sign',
    others: 'fa-coins',
  };
  currentCurrency: string = 'INR';
  ret: string;
  currDate: number;
  deliveredAddress: string;
  list: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() {
    this.ret = this.money[this.currentCurrency];
    this.currDate = Date.now();
    this.deliveredAddress =
      'This has been delivered to PRASI Labs Hyderabad, Telangana (India)';
  }

  ngOnInit(): void {}
}