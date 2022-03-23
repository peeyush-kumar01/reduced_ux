import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { AccountType, PhoneType, ZipType, EmailType } from '../Objects';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {

  constructor(private formbuilder: FormBuilder, private appmodule: AppModule, private router: Router) { }
  ngDoCheck(): void {
    this.formData.country = this.profile.get('country')?.value;
    this.formData.idtype = this.profile.get('idtype')?.value;
    this.isCompanyReadonlyFlgSet();
    this.isCompanyRequiredFlgSet();
    this.isIdNumRequiredFlgSet();
  }

  isCompanyReadonly: boolean = true;
  isCompanyRequired: boolean = false;
  isIdNumRequired: boolean = true;

  profile = this.formbuilder.group({
    name: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    country: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    idtype: ['', [Validators.required]],
    idname: [''],
    idnum: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    address: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    regtype: ['', [Validators.required]],
    decl: [''],
    cname: [''],
    ccountry: [''],
    cidname: [''],
    cidnum: [''],
    cemail: [''],
    cphone: [''],
    caddress: [''],
    cstate: [''],
    czip: [''],
    creg: [''],
    customerid: ['']
  })

  formData = {
    country: this.profile.get('country')?.value,
    idtype: this.profile.get('idtype')?.value,
  }

  isCompanyReadonlyFlgSet() {
    this.profile.get("regtype")?.value == "COMPANY" ? this.isCompanyReadonly = false : this.isCompanyReadonly = true

  }

  isCompanyRequiredFlgSet() {
    this.profile.get("regtype")?.value == "COMPANY" ? this.isCompanyRequired = true : this.isCompanyRequired = false
  }

  isIdNumRequiredFlgSet() {
    this.profile.get("idtype")?.value == "NOT_DISCLOSED" ? this.isIdNumRequired = false : this.isIdNumRequired = true
  }

  createUser($event: Event) {
    $event.preventDefault();
    let accountJson: AccountType = {
      id: '',
      customerid: this.profile.get('customerid')?.value,
      fullname: this.profile.get('name')!.value,
      email: this.profile.get('email')!.value,
      phone: this.profile.get('phone')?.value,
      cemail: this.profile.get('cemail')?.value,
      cphone: this.profile.get('cphone')?.value,
      caddress: this.profile.get('caddress')?.value,
      uaddress: (this.profile.get('address')!.value + ', ' + this.profile.get('state')!.value + ', ' + this.profile.get('zip')!.value + ', ' + this.profile.get('country')!.value),
      cstate: this.profile.get('cstate')?.value,
      czip: this.profile.get('czip')?.value,
      idtype: this.profile.get('idtype')?.value,
      idname: this.profile.get('idname')?.value,
      idnum: this.profile.get('idnum')?.value,
      type: this.profile.get('regtype')?.value,
      compregno: this.profile.get('creg')?.value,
      company: this.profile.get('cname')?.value,
      uniqbusidenno: this.profile.get('cidnum')?.value,
      uniqbusidentype: this.profile.get('cidname')?.value,
      buscountry: this.profile.get('ccountry')?.value,
      contact: '',
      address: '',
      selfdeclation: this.profile.get('decl')?.value,
      status: 'UNVERIFIED',
      dob: this.profile.get('dob')?.value,
      updatedby: '',
      createdby: '',
      created: new Date().toISOString(),
      updated: ''
    }

    let emailJson: EmailType = {
      id: '',
      eid: '',
      status: 'ACTIVE',
      email: this.profile.get('email')!.value,
    }

    let phoneJson: PhoneType = {
      id: '',
      status: 'ACTIVE',
      pid: '',
      phone: this.profile.get('phone')?.value,
      mobile: ''
    }

    let zipJson: ZipType = {
      id: '',
      status: 'ACTIVE',
      zip: this.profile.get('zip')!.value,
      state: this.profile.get('state')!.value,
      country: this.profile.get('country')!.value,
      zid: ''
    }

    let accountPayload = {
      Account: accountJson,
      Zip: zipJson,
      Email: emailJson,
      Phone: phoneJson
    }

    this.appmodule.runGetCall('ACCOUNT', { data: [accountPayload] }).subscribe(
      data => {
        if (data['successMsg']['userid'] && data['successMsg']['type']) {
          alert(`Your user id is ${data['successMsg']['userid'] } and pssword is entered email.`)
          this.router.navigateByUrl('/login');
        }
      },
      error => { console.log(error) },
      () => { console.log('Done'); }
    )
  }
  ngOnInit(): void {

  }

}
