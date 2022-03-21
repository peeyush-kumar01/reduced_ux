
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { FormBuilder, Validators } from '@angular/forms';
import { AddressType, ZipType } from '../Objects';
import { Address } from '../address';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.css'],
})
export class AddressInformationComponent implements OnInit {

  constructor(private appmodule: AppModule, private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getaddress()
  }

//Variable declartion
  profileAddressEdit = this.formbuilder.group({
    address: ['', [Validators.required]],
    type: ['', [Validators.required]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    id: ['', [Validators.required]],
    addressid: ['', [Validators.required]],
    status: ['', [Validators.required]]
  })

  Address: any[] = []
  fetchAddress!: any[]
  tempAdr: any


//Set clicked contexted address function
  setTempAdr(obj: any) {

    this.profileAddressEdit.patchValue({ address: obj.addressName });
    this.profileAddressEdit.patchValue({ type: obj.addressType });
    this.profileAddressEdit.patchValue({ state: obj.addressState });
    this.profileAddressEdit.patchValue({ country: obj.addressCountry });
    this.profileAddressEdit.patchValue({ pin: obj.addressPin });
    this.profileAddressEdit.patchValue({ id: obj.Id });
    this.profileAddressEdit.patchValue({ addressid: obj.addressId });
    this.profileAddressEdit.patchValue({ status: obj.addressStatus });
  }


//function to change address type icon
  getIclass(addressType: any): string {
    return addressType.toLocaleLowerCase() == 'shipping'
      ? 'c-s'
      : addressType.toLocaleLowerCase() == 'billing'
        ? 'c-b'
        : addressType.toLocaleLowerCase() == 'primary'
          ? 'c-p'
          : '';
  }

//fetch address function.
  getaddress(): void {
    this.fetchAddress=[]
    this.appmodule.runGetCall('GET_ADDRESS', {}).subscribe(
      (data) => {
        this.fetchAddress = data['successMsg']
        this.fetchAddress.forEach((adrData: any) => {
          this.Address.push({
            addressName: adrData.Address.address,
            addressId: adrData.Address.addressid,
            addressPin: adrData.Zip.zip,
            addressState: adrData.Zip.state,
            addressType: adrData.Address.type,
            addressCountry: adrData.Zip.country,
            addressClass: this.getIclass(adrData.Address.type),
            Id: adrData.Address.id,
            addressStatus: adrData.Address.status
          })

        })
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }

//Create address function
  putaddress(): void {

    let adr: AddressType = {
      id: '',
      status: 'ACTIVE',
      addressid: '',
      type: (<HTMLInputElement>document.getElementById('ntype')!).value,
      address: (<HTMLInputElement>document.getElementById('naddress')!).value,
      ziplist: null
    }

    let zip: ZipType = {
      id: '',
      status: 'ACTIVE',
      zip: (<HTMLInputElement>document.getElementById('npin')!).value,
      state: (<HTMLInputElement>document.getElementById('nstate')!).value,
      country: (<HTMLInputElement>document.getElementById('ncountry')!).value,
      zid: ''
    }

    let adrO = new Address(adr);
    adrO.validateAddress();

    this.appmodule.runGetCall('ADDRESS', {
      data: [{
        Address: adr,
        Zip: zip
      }]
    }).subscribe(
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

//Update address function
  updateAddress(event: Event): void {
    event.preventDefault();
    let tc = this.fetchAddress.filter(obj => {
      return obj.Address.addressid == this.profileAddressEdit.get('addressid')?.value
    })
    tc[0].Address.address = this.profileAddressEdit.get('address')?.value
    tc[0].Address.type = this.profileAddressEdit.get('type')?.value

    if (!(
      tc[0].Zip.zip == (
        this.profileAddressEdit.get('pin')?.value
      )
      &&
      tc[0].Zip.state == (
        this.profileAddressEdit.get('state')?.value
      )
      &&
      tc[0].Zip.country == (
        this.profileAddressEdit.get('country')?.value
      )
    )) {
      tc[0].Zip.zip = this.profileAddressEdit.get('pin')?.value
      tc[0].Zip.state = this.profileAddressEdit.get('state')?.value
      tc[0].Zip.country = this.profileAddressEdit.get('country')?.value
      tc[0].Zip.id = ''
      tc[0].Zip.zid = ''
    }

    let adrO = new Address(tc[0].Address);
    adrO.validateAddress();
    this.appmodule.runGetCall('ADDRESS', {
      data: [{
        Address: tc[0].Address,
        Zip: tc[0].Zip
      }]
    }).subscribe(
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
//Inactivate address function
  deleteAddress(): void {
    let tc = this.fetchAddress.filter(obj => {
      return obj.Address.addressid == this.profileAddressEdit.get('addressid')?.value
    })

    tc[0].Address.status = 'INACTIVE'
    this.appmodule.runGetCall('ADDRESS', {
      data: [{
        Address: tc[0].Address,
        Zip: tc[0].Zip
      }]
    }).subscribe(
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

//Code ends here.
}