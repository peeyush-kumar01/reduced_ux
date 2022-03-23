import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductType } from '../../Objects'
import { ProductModel } from '../../products'
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-productinformation',
  templateUrl: './productinformation.component.html',
  styleUrls: ['./productinformation.component.css']
})
export class ProductinformationComponent implements OnInit {

  list!: ProductType[];
  stateArray: { [index: string]: any } = {}

  //new product
  @ViewChild("npname") npname!: ElementRef;
  @ViewChild("ncasNo") ncasNo!: ElementRef;
  @ViewChild("nunitSellType") nunitSellType!: ElementRef;
  @ViewChild("nquantity") nquantity!: ElementRef;
  @ViewChild("nprice") nprice!: ElementRef;
  @ViewChild("ntype") ntype!: ElementRef;
  @ViewChild("ncurrency") ncurrency!: ElementRef;
  @ViewChild("nmkcountry") nmkcountry!: ElementRef;
  @ViewChild("nmkcompany") nmkcompany!: ElementRef;
  @ViewChild("nreactivity") nreactivity!: ElementRef;
  @ViewChild("nstorageType") nstorageType!: ElementRef;
  @ViewChild("ncname") ncname!: ElementRef;
  @ViewChild("ncformula") ncformula!: ElementRef;
  @ViewChild("nadate") nadate!: ElementRef;
  @ViewChild("nstructure") nstructure!: ElementRef;
  @ViewChild("nedate") nedate!: ElementRef;

  /*
  * UI display functions
  */
  changeActionHidden(prodid: string) {
    this.stateArray[prodid].actionHiden == true ? true : false
    this.stateArray[prodid].actionHiden = !this.stateArray[prodid].actionHiden;
    this.changeProductState(prodid);
    this.updateProduct(prodid);

  }

  changeProductState(prodid: string) {
    if (this.stateArray[prodid].productState == 'btn dropdown-toggle smalltext btn-success') {

      this.stateArray[prodid].productState = 'btn dropdown-toggle smalltext btn-secondary';
      this.list.filter(item => item.prodid == prodid)[0].status = 'INACTIVE'
    }
    else {
      this.stateArray[prodid].productState = 'btn dropdown-toggle smalltext btn-success';
      this.list.filter(item => item.prodid == prodid)[0].status = 'ACTIVE'
    }
  }

  changefieldreadonly(prodid: string) {
    if (this.stateArray[prodid].productState != 'btn dropdown-toggle smalltext btn-success') {
      alert("You can not edit an inactive product. First activte it.")
      return
    }
    this.stateArray[prodid].isSave = false;
    this.stateArray[prodid].fieldReadonly = false;
  }

  save(prodid: string) {
    this.stateArray[prodid].isSave = true;
    this.stateArray[prodid].fieldReadonly = true;
    this.updateProduct(prodid);
  }

  cancel(prodid: string) {
    this.stateArray[prodid].isSave = true;
    this.stateArray[prodid].fieldReadonly = true;
  }

  //currency control options
  money: { [index: string]: string } = {
    USD: 'fa-dollar-sign',
    INR: 'fa-rupee-sign',
    EUR: 'fa-euro-sign',
    GBP: 'fa-pound-sign',
    JPY: 'fa-yen-sign',
    ILS: 'fa-shekel-sign',
    others: 'fa-coins',
  };

  constructor(private appmodule: AppModule) {

  }

  getProduct(): void {
    // var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    this.appmodule.runGetCall('ADMIN_ALL_PRODUCT', {}).subscribe(
      (value) => {
        this.list = value['successMsg'];
        this.list.forEach(item => {
          this.stateArray[item.prodid!] = {
            actionHiden: item.status == 'ACTIVE' ? false : true,
            productState: item.status == 'ACTIVE' ? 'btn dropdown-toggle smalltext btn-success' : 'btn dropdown-toggle smalltext btn-secondary',
            fieldReadonly: true,
            isSave: true,
            ret: this.money[item.currency],
            currDate: Date.now()
          }
        })
        //console.log(this.list)
      },
      (error) => { console.log(error) },
      () => { console.log("Done") }
    )

  }

  putProduct(obj: ProductType): void {
    let p = new ProductModel(obj);
    //  console.log(obj);
    console.log(p.checkProdMandatoryFields())
    console.log(p.checkAvailabilityDate())
    this.appmodule.runGetCall('PRODUCT', { data: [{ Product: obj }] }).subscribe(
      (data) => {
        console.log(data['successMsg']);
        data['successMsg'] != undefined ? alert('Success!') : alert('Failed!')
      },
      (error) => {
        console.log(error)
        alert('Failed!')
      },
      () => { console.log('Done') }
    )

  }

  ngOnInit(): void {
    this.getProduct();
  }

  updateProduct(prodid: string): void {
    let prodObj = this.list.filter(item => { return item.prodid == prodid })[0]
    let uObj: ProductType = {
      id: prodObj.id,
      productname: (<HTMLInputElement>document.getElementById('pname_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('pname_' + prodid)!).value : prodObj.productname,
      casno: (<HTMLInputElement>document.getElementById('casNo_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('casNo_' + prodid)!).value! : prodObj.casno,
      unitselltype: (<HTMLInputElement>document.getElementById('unitSellType_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('unitSellType_' + prodid)!).value! : prodObj.unitselltype,
      prodid: prodObj.prodid,
      priceperunit: (<HTMLInputElement>document.getElementById('price_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('price_' + prodid)!).value! : prodObj.priceperunit,
      quantity: (<HTMLInputElement>document.getElementById('quantity_' + prodid)!).value,
      status: prodObj.status,
      type: (<HTMLInputElement>document.getElementById('type_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('type_' + prodid)!).value! : prodObj.type,
      makecountry: (<HTMLInputElement>document.getElementById('mkcountry_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('mkcountry_' + prodid)!).value! : prodObj.makecountry,
      makecompany: (<HTMLInputElement>document.getElementById('mkcompany_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('mkcompany_' + prodid)!).value! : prodObj.makecompany,
      reactivity: (<HTMLInputElement>document.getElementById('reactivity_' + prodid)!).value,
      storgetype: (<HTMLInputElement>document.getElementById('storageType_' + prodid)!).value,
      structure: prodObj.structure,
      chemicalformula: (<HTMLInputElement>document.getElementById('cformula_' + prodid)!).value,
      chemicalname: (<HTMLInputElement>document.getElementById('cname_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('cname_' + prodid)!).value! : prodObj.chemicalname,
      currency: (<HTMLInputElement>document.getElementById('currency_' + prodid)!).value ? (<HTMLInputElement>document.getElementById('currency_' + prodid)!).value! : prodObj.currency,
      availabilitydate: new Date((<HTMLInputElement>document.getElementById('adate_' + prodid)!).value!),
      enddate: (<HTMLInputElement>document.getElementById('id_' + prodid)!).value ? new Date((<HTMLInputElement>document.getElementById('id_' + prodid)!).value!) : null,
    }
    this.putProduct(uObj);
  }

  newProduct(): void {
    let nObj: ProductType = {
      productname: this.npname.nativeElement.value,
      id: '',
      casno: this.ncasNo.nativeElement.value,
      unitselltype: this.nunitSellType.nativeElement.value,
      prodid: '',
      priceperunit: this.nprice.nativeElement.value,
      quantity: this.nquantity.nativeElement.value,
      status: 'ACTIVE',
      type: this.ntype.nativeElement.value,
      makecountry: this.nmkcountry.nativeElement.value,
      makecompany: this.nmkcompany.nativeElement.value,
      reactivity: this.nreactivity.nativeElement.value,
      storgetype: this.nstorageType.nativeElement.value,
      structure: this.nstructure.nativeElement.value,
      chemicalformula: this.ncformula.nativeElement.value,
      chemicalname: this.ncname.nativeElement.value,
      currency: this.ncurrency.nativeElement.value,
      availabilitydate: this.nadate.nativeElement.value,
      enddate: this.nedate.nativeElement.value
    }
    this.putProduct(nObj);
  }

}