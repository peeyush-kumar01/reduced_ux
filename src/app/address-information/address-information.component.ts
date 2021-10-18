
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.css'],
})
export class AddressInformationComponent implements OnInit {
  constructor() {
    this.getIclass();
  }

  ngOnInit(): void {}
  add: { [index: string]: string }[] = [
    {
      addressName: 'Ramesh Kumar',
      addressId: 'id',
      addressCity: '+91 8383838383',
      addressPin: '098877766',
      addressState: 'abc@test.com',
      addressType: 'Primary',
      addressCountry: 'male',
      addressClass: '',
    },
    {
      addressName: 'Ramesh Kumar',
      addressId: 'id',
      addressCity: '+91 8383838383',
      addressPin: '098877766',
      addressState: 'abc@test.com',
      addressType: 'Billing',
      addressCountry: 'male',
      addressClass: '',
    },
    {
      addressName: 'Ramesh Kumar',
      addressId: 'id',
      addressCity: '+91 8383838383',
      addressPin: '098877766',
      addressState: 'abc@test.com',
      addressType: 'Shipping',
      addressCountry: 'male',
      addressClass: '',
    },
  ];

  getIclass(): void {
    this.add.forEach((element) => {
      element.addressType.toLocaleLowerCase() == 'shipping'
        ? (element.addressClass = 'c-s')
        : element.addressType.toLocaleLowerCase() == 'billing'
        ? (element.addressClass = 'c-b')
        : element.addressType.toLocaleLowerCase() == 'primary'
        ? (element.addressClass = 'c-p')
        : '';
    });
  }
}