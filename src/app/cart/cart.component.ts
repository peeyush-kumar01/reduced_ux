
import { Component, DoCheck, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { AddToCart } from '../app.service';
import { Cart } from '../cart';
import { OrderitemType, OrdersType } from '../Objects';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  constructor(private cartservice: AddToCart, private appmodule: AppModule) {
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalTax = 0;
    this.payblePrice = 0;
   
    this.cartObject = new Cart();
     this.orderPayload = {
       data: [] //this.cartObject.generateOrderpayload(AppModule.CART_LST, AppModule.USR.accntid, this.bill, this.ship, this.cur)
     }
    // this.cartItem = this.transformObj(this.orderPayload.data.reduc((prev: any, curr: any) => {
    //   if (curr.Orderitem)
    //     prev.push(curr.Orderitem)
    //   return prev
    // }, []));
    // this.calculateCart(this.orderPayload.data.reduc((prev: any, curr: any) => {
    //   if (curr.Orders)
    //     prev.push(curr.Orders)
    //   return prev
    // }, []));
  }

  ngOnInit(): void {

    //Fetch address
    this.appmodule.runGetCall('GET_ADDRESS', {}).subscribe(
      (data) => {
        this.adrList = data['successMsg']

        this.setAddr(this.adrList);
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('Done');
      }
    )

    //Fetch contact
    this.appmodule.runGetCall('GET_CONTACT', {}).subscribe(
      (data) => {
        this.conList = data['successMsg']
        this.setCon(this.conList);
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('Done');
      }
    )
  }

  ngDoCheck(): void {
    this.cur = (<HTMLInputElement>document.getElementById('cur')!).value
    try {
      this.orderPayload.data = this.cartObject.generateOrderpayload(AppModule.CART_LST, AppModule.USR.accntid, this.bill, this.ship, this.cur);

    } catch (error) {
      console.log(error)
      alert(error)
    }
    this.cartItem = this.transformObj(this.orderPayload.data.reduce((prev: any, curr: any) => {
      if (curr.Orderitem)
        prev.push(curr.Orderitem)
      return prev
    }, []));
    this.calculateCart(this.orderPayload.data.reduce((prev: any, curr: any) => {
      if (curr.Orders)
        prev.push(curr.Orders)
      return prev
    }, []));
  }


  totalPrice: number;
  totalTax: number;
  totalDiscount: number;
  payblePrice: number;
  currency = AppModule.LST_CRNCY;
  cartItem: Array<any>=[];
  orderPayload: { [index: string]: any };
  bill = { contact: '', address: '', state: '', country: '' }
  ship = { contact: '', address: '' }
  cur?: string
  adrList?: any
  conList?: any
  context = ''
  private cartObject: Cart

  //set predefined address
  setAddr(adrList: any): void {
    let badr = adrList.filter((obj: any) => { return obj.Address.type == 'BILLING' })
    if (badr.length == 0) {
      badr = adrList.filter((obj: any) => { return obj.Address.type == 'PRIMARY' })
    }
    let sadr = adrList.filter((obj: any) => { return obj.Address.type == 'SHIPPING' })
    if (sadr.length == 0) {
      sadr = adrList.filter((obj: any) => { return obj.Address.type == 'PRIMARY' })
    }

    badr = badr[0]
    sadr = sadr[0]

    if (Object.keys(badr).length != 0) {
      this.bill.address = badr.Address.address + ' ' + badr.Zip.state + ' ' + badr.Zip.country + ' ' + badr.Zip.zip
      this.bill.state = badr.Zip.state
      this.bill.country = badr.Zip.country
    }

    if (Object.keys(sadr).length != 0) {
      this.ship.address = sadr.Address.address + ' ' + sadr.Zip.state + ' ' + sadr.Zip.country + ' ' + sadr.Zip.zip
    }
  }

  //set predefined contact
  setCon(conList: any): void {
    let bcon = conList.filter((obj: any) => { return obj.Contact.type == 'BILLING' })
    if (bcon.length == 0) {
      bcon = conList.filter((obj: any) => { return obj.Contact.type == 'PRIMARY' })
    }
    let scon = conList.filter((obj: any) => { return obj.Contact.type == 'SHIPPING' })
    if (scon.length == 0) {
      scon = conList.filter((obj: any) => { return obj.Contact.type == 'PRIMARY' })
    }

    bcon = bcon[0]
    scon = scon[0]
    if (Object.keys(bcon).length != 0)
      this.bill.contact = `${bcon?.Contact.name} Phone: ${bcon?.Phone.phone} Mobile: ${bcon?.Phone.mobile} EMail: ${bcon?.Email.email}`
    if (Object.keys(scon).length != 0)
      this.ship.contact = `${scon?.Contact.name} Phone: ${scon?.Phone.phone} Mobile: ${scon?.Phone.mobile} EMail: ${scon?.Email.email}`

  }

  //function to transform cart and product
  transformObj(i: any[]): any[] {
    let tempCart: any = []
    this.totalDiscount=0
    this.totalPrice=0
    i.forEach((obj: OrderitemType) => {
      let cartItem = {
        iname: obj.itemname,
        qntty: `${obj.quantity} ${obj.type} @ ${obj.itemprice} per ${obj.type} with discount: ${obj.discount}`,
        price: obj.itemprice * obj.quantity,
        discount: obj.discount * obj.quantity,
        tax: obj.taxamount + obj.sgstamount + obj.igstamount + obj.cgstamount
      }
      tempCart.push(cartItem)
      this.totalDiscount = this.totalDiscount + obj.discount
      this.totalPrice = this.totalPrice + obj.quantity*obj.itemprice;
    })

    return tempCart;
  }

  //function to display cart item
  calculateCart(item: Array<any>) {
    this.totalTax = 0;
    this.payblePrice = 0;
    item.map((obj: OrdersType) => {
      this.totalTax = this.totalTax + obj.taxamount + obj.cgstamount + obj.igstamount + obj.sgstamount;
      this.payblePrice = this.payblePrice + obj.finalamount!;
    })
    this.totalTax = Math.ceil(this.totalTax);
    this.payblePrice = Math.ceil(this.payblePrice);
  }

  //function to remove item from cart
  removeItem(itemNum: number): void {
    AppModule.CART_LST.splice(itemNum, 1);
  }

  //function to shoose billing address
  chooseBA(): void {
    let idnum = ''
    let idval = ''
    Array.from(document.getElementsByClassName('csel')).filter(
      (element) => {
        return (<HTMLInputElement>element.firstElementChild).checked == true
      }
    ).forEach(element => {

      idnum = element.firstElementChild!.id.split('_')[1]
    })

    Array.from(document.getElementsByClassName('ssel')).filter(
      (element) => {
        return (<HTMLInputElement>element.firstElementChild).checked == true
      }
    ).forEach(element => {
      idval = element.firstElementChild!.id.split('_')[1]
    })

    this.bill.contact = `${(<HTMLElement>document.getElementById('name_' + idnum)).innerText} Phone: ${(<HTMLElement>document.getElementById('phone_' + idnum)).innerText} Mobile: ${(<HTMLElement>document.getElementById('mobile_' + idnum)).innerText} EMail: ${(<HTMLElement>document.getElementById('email_' + idnum)).innerText}`
    this.bill.address = (<HTMLElement>document.getElementById('address_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('state_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('country_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('zip_' + idval)).innerText!
    this.bill.state = (<HTMLElement>document.getElementById('state_' + idval)).innerText!
    this.bill.country = (<HTMLElement>document.getElementById('country_' + idval)).innerText!

  }

  //function to choose shipping address
  chooseSA() {
    let idnum = ''
    let idval = ''
    Array.from(document.getElementsByClassName('csel')).filter(
      (element) => {
        return (<HTMLInputElement>element.firstElementChild).checked == true
      }
    ).forEach(element => {
      idnum = element.firstElementChild!.id.split('_')[1]
    })

    Array.from(document.getElementsByClassName('ssel')).filter(
      (element) => {
        return (<HTMLInputElement>element.firstElementChild).checked == true
      }
    ).forEach(element => {
      idval = element.firstElementChild!.id.split('_')[1]
    })

    this.ship.contact = `${(<HTMLElement>document.getElementById('name_' + idnum)).innerText} Phone: ${(<HTMLElement>document.getElementById('phone_' + idnum)).innerText} Mobile: ${(<HTMLElement>document.getElementById('mobile_' + idnum)).innerText} EMail: ${(<HTMLElement>document.getElementById('email_' + idnum)).innerText}`
    this.ship.address = (<HTMLElement>document.getElementById('address_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('state_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('country_' + idval)).innerText! + ' ' + (<HTMLElement>document.getElementById('zip_' + idval)).innerText!
    this.bill.state = (<HTMLElement>document.getElementById('state_' + idval)).innerText!
    this.bill.country = (<HTMLElement>document.getElementById('country_' + idval)).innerText!
  }

  submitOrder(): void {
    // console.log(this.orderPayload)
    this.appmodule.runGetCall('ORDER', this.orderPayload).subscribe(
      (data) => {
        if(data['successMsg'])
        {
          alert('Order created succesfully.')
          AppModule.CART_LST=[]
        }else{
          alert('Something is wrong. Please try again or raise a service request.')
        }
      },
      (error) => {
        console.log(error)
        alert(error)
      },
      () => {
        console.log('Done')
      }
    )
  }
  //Code ends here
}
