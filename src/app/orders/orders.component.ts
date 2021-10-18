
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor() {
    this.ret = this.money[this.currentCurrency];
    this.calculateOrderStatus();
  }

  ngOnInit(): void {}

  blue = 'accordion-button-c';
  orders: { [index: string]: any }[] = [
    {
      'order#': '1',
      orderStatus: 'pending',
      items: [],
      orderIconColor:''
    },
    {
      'order#': '2',
      orderStatus: 'pending',
      orderIconColor:'',
      items: [
        {
          itemNo: '21',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'Pending',
        },
        {
          itemNo: '22',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'In-Progress',
        },
      ],
    },
    {
      'order#': '3',
      orderStatus: 'pending', orderIconColor:'',
      items: [
        {
          itemNo: '31',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'Complete',
        },
        {
          itemNo: '32',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'Complete',
        },
        {
          itemNo: '33',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'Pending',
        },
        {
          itemNo: '34',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'In-Progress',
        },
        {
          itemNo: '35',
          itemPrice: '120',
          itemGstRate: '18',
          itemNetPrice: '111',
          itemDiscount: '0',
          itemStatus: 'Cancelled',
        },
      ],
    },
  ];

  icon: { [index: string]: string } = {
    Complete: 'fa-check',
    'In-Progress': 'fa-tasks',
    Pending: 'fa-pause-circle',
    Cancelled: 'fa-times',
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
        Pending: false,
        'In-Progress': false,
        Complete: false,
        Cancelled: false,
      };
      element.items.length == 0 ? (flags['Cancelled'] = true) : '';
      element.items.forEach((itemElement: any) => {
        switch (itemElement.itemStatus) {
          case 'Pending': {
            flags['Pending'] = true;
            break;
          }
          case 'In-Progress': {
            flags['In-Progress'] = true;
            break;
          }
          case 'Complete': {
            flags['Complete'] = true;
            break;
          }
          case 'Cancelled': {
            flags['Cancelled'] = true;
            break;
          }
          default: {
            flags['Cancelled'] = true;
          }
        }
      });
      flags['Pending'] &&
      !(flags['In-Progress'] || flags['Complete'] || flags['Cancelled'])
        ? (() => {
            element['orderStatus'] = 'Pending';
            element['orderIconColor'] = 'grey';
          })()
        : flags['Complete'] &&
          !(flags['In-Progress'] || flags['Pending'] || flags['Cancelled'])
        ? (() => {
            element['orderStatus'] = 'Complete';
            element['orderIconColor'] = 'green';
          })()
        : flags['Cancelled'] &&
          !(flags['In-Progress'] || flags['Complete'] || flags['Pending'])
        ? (() => {
            element['orderStatus'] = 'Cancelled';
            element['orderIconColor']= 'brown';
          })()
        : (() => {
            element['orderStatus'] = 'In-Progress';
            element['orderIconColor'] = 'rgb(187, 184, 11)';
          })();
    });
  }
}