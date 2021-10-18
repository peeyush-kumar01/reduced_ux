
import { Component, OnInit } from '@angular/core';
import { AccountInformation } from './account-information';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css'],
})
export class AccountInformationComponent implements OnInit {
  customer1 = new AccountInformation({
    name: 'Peeyush Kumar',
    sex: 'Male',
    companyName: 'Prasi Labs US pvt ltd',
    type: 'Company',
    pan: 'abcdefg',
    compnayIdentifierNo: 'xyu',
    compnayIdentifiertype: 'TFN',
    country: 'India',
    DOB: new Date('21-nov-1988'),
    companyAddress: 'Hyderabad',
    companyPhone: Number.parseInt('8374156046'),
    companyEmail: 'peeyush@prasilabs.com',
    associationNum: '',
    selfAttest: true,
    id: '',
  });
  profileSaveDisable: boolean = true;

  enableProfileSave(){
    this.profileSaveDisable=false;
  }

  constructor() {
    console.log(this.customer1.account.DOB);

  }

  ngOnInit(): void {}

}