
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
})
export class ContactInformationComponent implements OnInit {
  constructor() {
    this.getIclass();
  }

  ngOnInit(): void {}
  contacts: { [index: string]: string }[] = [
    {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: 'Billing',
      contactSex: 'male',
      contactClass: '',
    },
    {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: 'Shipping',
      contactSex: 'female',
      contactClass: '',
    },
    {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: 'Primary',
      contactSex: 'other',
      contactClass: '',
    },
    {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: '',
      contactSex: 'male',
      contactClass: '',
    }, {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: '',
      contactSex: 'other',
      contactClass: '',
    }, {
      contactName: 'Ramesh Kumar',
      contactId: 'id',
      contactMobile: '+91 8383838383',
      contactPhone: '098877766',
      contactEmail: 'abc@test.com',
      contactType: '',
      contactSex: 'other',
      contactClass: '',
    },
  ];

  sexIcon: { [index: string]: string } = {
    male: 'male male',
    female: 'female female',
    other: 'smile other',
  };

  getIclass(): void {
    this.contacts.forEach((element) => {
      element.contactType.toLocaleLowerCase() == 'shipping'
        ? (element.contactClass = 'c-s')
        : element.contactType.toLocaleLowerCase() == 'billing'
        ? (element.contactClass = 'c-b')
        : element.contactType.toLocaleLowerCase() == 'primary'
        ? (element.contactClass = 'c-p')
        : '';
    });
  }
}