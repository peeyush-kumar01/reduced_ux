import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.component.html',
  styleUrls: ['./customerinformation.component.css']
})
export class CustomerinformationComponent implements OnInit {

  constructor() { }
  filterTerm: any = '';
  ngOnInit(): void {
  }
  account: Account = new Account({
    id: 'String',
    customerid: 'String',
    fullname: 'String',
    email: 'String',
    phone: 'String',
    cemail: 'String',
    cphone: 'String',
    caddress: 'String',
    uaddress: 'String',
    cstate: 'String',
    czip: 1,
    idtype: 'String',
    idname: 'String',
    idnum: 'String',
    type: 'String',
    compregno: 'String',
    company: 'String',
    uniqbusidenno: 'String',
    uniqbusidentype: 'String',
    buscountry: 'String',
    contact: 'String',
    address: 'String',
    selfdeclation: false,
    status: 'String',
    dob: new Date('2022-02-22'),
    updatedby: 'string | null',
    createdby:' string | null',
    created: '',
    updated: '',
  })

  data: Array<Account> = [this.account, this.account, this.account, this.account, this.account, this.account, this.account, this.account, this.account]
}