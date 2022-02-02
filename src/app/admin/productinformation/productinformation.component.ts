import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productinformation',
  templateUrl: './productinformation.component.html',
  styleUrls: ['./productinformation.component.css']
})
export class ProductinformationComponent implements OnInit {

  actionHiden: boolean;
  productState: String;
  fieldReadonly: boolean;
  isSave:boolean;
  changeActionHidden() {
    this.actionHiden = true?true:false
  }
  changeProductState() {
    this.productState = false ? 'btn dropdown-toggle smalltext btn-success' : 'btn dropdown-toggle smalltext btn-secondary'
  }
  changefieldreadonly() {
    this.isSave=false;
    this.fieldReadonly = false;
  }
  save(){
    this.isSave=true;
    this.fieldReadonly = true;
  }
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
    this.actionHiden = false;
    this.isSave=true;
    this.productState = 'btn dropdown-toggle smalltext btn-success';
    this.fieldReadonly = true;
    this.ret = this.money[this.currentCurrency];
    this.currDate = Date.now();
    this.deliveredAddress =
      'This has been delivered to PRASI Labs Hyderabad, Telangana (India)';
  }


  ngOnInit(): void {
  }
  newProduct() {

  }
}
