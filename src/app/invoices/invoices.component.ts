
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {

  listInvoice=[];

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

  

  constructor(private appmodule:AppModule) {
    this.ret = this.money[this.currentCurrency];
    this.currDate = Date.now();
    this.deliveredAddress =
      'This has been delivered to PRASI Labs Hyderabad, Telangana (India)';
  }

  getInvoice(): void {
    this.appmodule.runGetCall('GET_INVOICE', {}).subscribe(
      (value) => {
        this.listInvoice = value['successMsg'];
        console.log(value)
      },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  ngOnInit(): void {
    this.getInvoice()
  }
}