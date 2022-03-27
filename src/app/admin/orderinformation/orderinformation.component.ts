import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-orderinformation',
  templateUrl: './orderinformation.component.html',
  styleUrls: ['./orderinformation.component.css']
})
export class OrderinformationComponent implements OnInit {

  constructor(private appmodule: AppModule) {
    this.ret = this.money[this.currentCurrency];
    this.calculateOrderStatus();
  }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ORDER', {}).subscribe(
      (data) => {
        data['successMsg'].forEach((o: any) => {
          let tempO: { [index: string]: any } = {}

          if (o.Orders && Object.keys(o.Orders).length > 0) {
            tempO = o.Orders
            tempO['order#'] = o.Orders.orderid
            tempO['orderStatus'] = o.Orders.status.toLowerCase()
            tempO['orderIconColor'] = ''
            tempO['items'] = data['successMsg'].reduce((ni: any, oi: any) => {

              if (oi.Orderitem && Object.keys(oi.Orderitem).length > 0 && oi.Orderitem.orderid == tempO['orderid'] && oi.Orderitem.accntid == tempO['accntid']) {
                ni.push(oi.Orderitem)
              }
              return ni
            }, [])
            tempO['items'].forEach((s: any) => {
              console.log(s)
              s['itemNo'] = s.itemid
              s['itemGstRate'] = s.cgstamount + s.sgstamount + s.igstamount + s.taxamount
              s['itemDiscount'] = s.discount
              s['itemStatus'] = s.status.toLowerCase()
            })
            this.orders.push(tempO)
          }

        })
        // console.log(this.orders)
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }

  blue = 'accordion-button-c';
  orders: { [index: string]: any }[] = [];

  icon: { [index: string]: string } = {
    complete: 'fa-check',
    'in-progress': 'fa-tasks',
    pending: 'fa-pause-circle',
    cancelled: 'fa-times',
  };
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
  calculateOrderStatus(): void {
    this.orders.forEach((element) => {
      let flags: { [index: string]: boolean } = {
        pending: false,
        'in-progress': false,
        complete: false,
        cancelled: false,
      };
      element.items.length == 0 ? (flags['cancelled'] = true) : '';
      element.items.forEach((itemElement: any) => {
        switch (itemElement.itemStatus) {
          case 'pending': {
            flags['pending'] = true;
            break;
          }
          case 'in-progress': {
            flags['in-progress'] = true;
            break;
          }
          case 'complete': {
            flags['complete'] = true;
            break;
          }
          case 'cancelled': {
            flags['cancelled'] = true;
            break;
          }
          default: {
            flags['cancelled'] = true;
          }
        }
      });
      flags['pending'] &&
        !(flags['in-progress'] || flags['complete'] || flags['cancelled'])
        ? (() => {
          element['orderStatus'] = 'pending';
          element['orderIconColor'] = 'grey';
        })()
        : flags['complete'] &&
          !(flags['in-progress'] || flags['pending'] || flags['cancelled'])
          ? (() => {
            element['orderStatus'] = 'complete';
            element['orderIconColor'] = 'green';
          })()
          : flags['cancelled'] &&
            !(flags['in-progress'] || flags['complete'] || flags['pending'])
            ? (() => {
              element['orderStatus'] = 'cancelled';
              element['orderIconColor'] = 'brown';
            })()
            : (() => {
              element['orderStatus'] = 'in-progress';
              element['orderIconColor'] = 'rgb(187, 184, 11)';
            })();
    });
  }

}
