import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { ProductType } from '../Objects';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AddToCart } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class MainComponent implements OnInit {
  location: Location;
  constructor(location: Location, private appmodule: AppModule, private cartservice: AddToCart, private router: Router) {
    this.location = location;
  }

  addToCart(obj: ProductType): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login.');
      return false;
    }
    let qty = (!obj.quantity ? 1 : obj.quantity)
    let cartItem = {
      iname: obj.productname,
      qntty: `${qty} ${obj.unitselltype} @ ${obj.priceperunit} per ${obj.unitselltype}`,
      price: (parseFloat(obj.priceperunit) * Number(qty)),
      discount: '10.00',
      tax: '1.10'
    }
    AppModule.CART_LST.push(cartItem);
    alert('Item added to cart');
  }

  moveToCart(obj: ProductType): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login.');
      return false;
    }

    let qty = (!obj.quantity ? 1 : obj.quantity)
    let cartItem = {
      iname: obj.productname,
      qntty: `${qty} ${obj.unitselltype} @ ${obj.priceperunit} per ${obj.unitselltype}`,
      price: (parseFloat(obj.priceperunit) * Number(qty)),
      discount: '10.00',
      tax: '1.10'
    }

    AppModule.CART_LST.push(cartItem);
    this.router.navigateByUrl('/dashboard/cart')
  }


  getKey(): void {
    this.keyList = Object.keys(this.selectOption);
  }

  getValues(): void {
    this.valueList = this.selectOption[this.selectKey];
  }

  products: ProductType[] = [];
  filterTerm: any = '';
  CardProdObj: any = {};
  error: any = ""
  selectKey: string = 'All';
  keyList: Array<string> = [];
  valueList: Array<string> = [];
  selectOption: { [index: string]: string[] } = {
    All: ['All'],
    Name: ['All'],
    Country: AppModule.LST_CNTRY,
    Category: AppModule.LST_CATG,
    Partners: AppModule.LST_PTNR,
    CASNo: ['All']
  }

  //this.filterTerm = event.target.value;

  goBack(): any {
    this.location.historyGo(0);
    return false;
  }
  getProduct(): any {
    this.appmodule.runGetCall('ALL_PRODUCT', '').subscribe(
      (value) => { this.products = value['successMsg']; console.log(this.products) },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByName(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('NAME_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByCASNo(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('CASNO_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }
  getProductByCatg(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('CATG_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }
  getProductByCntry(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('CNTRY_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByPtnr(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('PTNR_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  setCurObj(obj: any) {
    this.CardProdObj = obj;
  }

  ngOnInit(): void {
    this.getProduct();
    this.getKey();
    this.getValues();
  }
}