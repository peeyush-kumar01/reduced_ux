import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { ProductType } from '../Objects';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AddToCart } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class MainComponent implements OnInit {
  location: Location;
  constructor(location: Location, private appmodule: AppModule, private cartservice: AddToCart, private router: Router, private _activatedroute: ActivatedRoute, private formbuilder: FormBuilder) {
    this.location = location;
  }

  enquiryEq = this.formbuilder.group(
    {
      products: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
      name:['', [Validators.required]],
      country:['', [Validators.required]],
      company:['', [Validators.required]],
    }
  )
pages:number=1;

  submitEq(event: Event) {
    event.preventDefault();
    console.log(this.enquiryEq.value)
    this.appmodule.runGetCall('POST_DATA_EMAIL', { data: this.enquiryEq.value }).subscribe(
      (data) => { alert(data['successMsg']) },
      (error) => {
        console.error(error);
        alert(error)
      },
      () => { console.log('Done') }

    )
  }

  addToCart(obj: ProductType, x: number): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login or send us enquiry by clicking on the envelope icon.');
      return false;
    }

    obj.quantity = (<HTMLInputElement>document.getElementById('quantity_' + x)).value ?
      (<HTMLInputElement>document.getElementById('quantity_' + x)).value : "1"
    AppModule.CART_LST.push(obj);
    alert('Item added to cart');
  }

  addToCarti(obj: ProductType): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login or send us enquiry by clicking on the envelope icon.');
      return false;
    }

    obj.quantity = (<HTMLInputElement>document.getElementById('quantityi')).value ?
      (<HTMLInputElement>document.getElementById('quantityi')).value : "1"
    AppModule.CART_LST.push(obj);
    alert('Item added to cart');
  }

  moveToCart(obj: ProductType, x: number): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login or send us enquiry by clicking on the envelope icon.');
      return false;
    }

    obj.quantity = (<HTMLInputElement>document.getElementById('quantity_' + x)).value ?
      (<HTMLInputElement>document.getElementById('quantity_' + x)).value : "1"
    AppModule.CART_LST.push(obj);
    this.router.navigateByUrl('/dashboard/cart')
  }

  moveToCarti(obj: ProductType): boolean | void {
    if (!sessionStorage.getItem('currentUser')) {
      alert('Please login or send us enquiry by clicking on the envelope icon.');
      return false;
    }

    obj.quantity = (<HTMLInputElement>document.getElementById('quantityi')).value ?
      (<HTMLInputElement>document.getElementById('quantityi')).value : "1"
    AppModule.CART_LST.push(obj);
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
  selectVal: string = 'All';
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

  getClickedProduct() {

    switch (this.selectKey.toLocaleUpperCase()) {
      case 'COUNTRY':
        this.getProductByCntry(this.selectVal)
        break;
      case 'CATEGORY':
        this.getProductByCatg(this.selectVal)
        break;
      case 'PARTNERS':
        this.getProductByPtnr(this.selectVal)
        break;
      case 'CASNO':
        this.getProductByCASNo(this.filterTerm)
        break;
      case 'NAME':
        this.getProductByName(this.filterTerm)
        break;
      default:
        this.getProduct();
    }

  }

  goBack(): any {
    this.location.historyGo(0);
    return false;
  }
  getProduct(): any {
    this.appmodule.runGetCall('ALL_PRODUCT', '').subscribe(
      (value) => { this.products = value['successMsg']; },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByName(event: any): any {
    var eValue = event
    this.appmodule.runGetCall('NAME_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByCASNo(event: any): any {
    var eValue = event
    this.appmodule.runGetCall('CASNO_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }
  getProductByCatg(event: any): any {
    var eValue = event
    this.appmodule.runGetCall('CATG_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }
  getProductByCntry(event: any): any {
    var eValue = event
    this.appmodule.runGetCall('CNTRY_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  getProductByPtnr(event: any): any {
    var eValue = event
    this.appmodule.runGetCall('PTNR_PRODUCT', eValue).subscribe(
      (value) => { this.products = value['successMsg'] },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )
  }

  setCurObj(obj: any) {
    this.CardProdObj = obj;
  }

  sendEnquiry(obj: ProductType, x: number) {
    this.enquiryEq.patchValue({
      products: obj.productname +' '+obj.casno,
    })
  }

  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe(param => {
      if (param.get('id') == '') {
        this.selectKey = 'CATEGORY'
        this.selectVal = 'API'
        this.getClickedProduct();
      } else {
        this.getProduct();
      }
    })
    this.getKey();
    this.getValues();
  }
}