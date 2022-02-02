import { Component, OnInit } from '@angular/core';
import { AccountInformation } from '../../account-information/account-information';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor() { }
  profileSaveDisable: boolean = true;

  enableProfileSave(){
    this.profileSaveDisable=false;
  }
  ngOnInit(): void {
  }
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
}
