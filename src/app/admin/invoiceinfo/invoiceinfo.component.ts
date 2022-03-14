import { Component, OnInit } from '@angular/core';
import { InvoiceType } from '../../Objects'
import { Invoice } from '../../invoice'
import { AppModule } from '../../app.module';


@Component({
  selector: 'app-invoiceinfo',
  templateUrl: './invoiceinfo.component.html',
  styleUrls: ['./invoiceinfo.component.css']
})

export class InvoiceinfoComponent implements OnInit {
  listInvoice!: InvoiceType[];

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
  constructor(private appmodule: AppModule) {
    this.ret = this.money[this.currentCurrency];
    this.currDate = Date.now();
    this.deliveredAddress =
      'This has been delivered to PRASI Labs Hyderabad, Telangana (India)';
  }

  getInvoice(): void {
    this.appmodule.runGetCall('INVOICE', '').subscribe(
      (value) => {
        this.listInvoice = value;
        console.log(value)
      },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  putInvoice(obj: InvoiceType): void {
    this.appmodule.runGetCall('INVOICE', { data: [{ Invoice: obj }] }).subscribe(
      (value) => {
        console.log(value)
      },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  ngOnInit(): void {
  }

}
