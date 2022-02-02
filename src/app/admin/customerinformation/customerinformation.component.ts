import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.component.html',
  styleUrls: ['./customerinformation.component.css']
})
export class CustomerinformationComponent implements OnInit {

  constructor() { }
  filterTerm:any='';
  ngOnInit(): void {
  }
  account:Account={
    name: "Prasi Labs",
    email: "info@prasilabs.com",
    selfdeclaration: true,
    companyname: "PRASI Labs",
  }

  data:Array<Account>=[this.account,this.account,this.account,this.account,this.account,this.account,this.account,this.account,this.account]
}