import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountType, ContactType, AddressType, OrdersType, ServicerequestType } from 'src/app/Objects';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-customerinformation',
  templateUrl: './customerinformation.component.html',
  styleUrls: ['./customerinformation.component.css']
})
export class CustomerinformationComponent implements OnInit {

  constructor(private appmodule: AppModule) { }

  filterTerm: any = '';
  accntList: AccountType[] = []
  contactList: any[] = []
  orderList: any[] = []
  srList: ServicerequestType[] = []
  addrList: any[] = []
  setContext:any={}

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ACCOUNT', { listaccount: 'ALL' }).subscribe(
      (data) => {
       // console.log(data['successMsg']);
        this.accntList = data['successMsg'];
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }

  //get respective contact detail
  getCT(obj: AccountType) {
    this.appmodule.runGetCall('GET_CONTACT', { listaccount: obj.customerid }).subscribe(
      (data) => {
       // console.log(data['successMsg']);
        this.contactList = data['successMsg'];
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }

  //get respective address detail
  getAD(obj: AccountType) {
    this.appmodule.runGetCall('GET_ADDRESS', { listaccount: obj.customerid }).subscribe(
      (data) => {
       // console.log(data['successMsg']);
        this.addrList = data['successMsg'];
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }

  //get respective order detail
  getOD(obj: AccountType) {
    this.appmodule.runGetCall('GET_ORDER', { listaccount: obj.customerid }).subscribe(
      (data) => {
       // console.log(data['successMsg']);
        this.orderList = data['successMsg'].filter((d:any)=>{
          return d.Orders
        });
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }

  //get respective service request detail
  getSR(obj: AccountType) {
    console.log(obj.customerid)
    this.appmodule.runGetCall('GET_SR', { listaccount: obj.customerid }).subscribe(
      (data) => {
        console.log(data['successMsg']);
        this.srList = data['successMsg'];
      },
      (error) => {
        console.log(error);
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }
}