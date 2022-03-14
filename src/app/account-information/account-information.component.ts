
import { Component, OnInit, DoCheck } from '@angular/core';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { AccountType, PhoneType, ZipType, EmailType } from '../Objects';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css'],
})
export class AccountInformationComponent implements OnInit, DoCheck {

  acnt!: AccountType[];

  constructor(private formbuilder: FormBuilder, private appmodule: AppModule, private router: Router) { }
  ngDoCheck(): void {
    //this.formData.country = this.profile.get('country')?.value;
    this.formData.idtype = this.profile.get('idtype')?.value;
    //this.isCompanyReadonlyFlgSet();
    // this.isCompanyRequiredFlgSet();
    this.isIdNumRequiredFlgSet();
  }

  isCompanyReadonly: boolean = true;
  isCompanyRequired: boolean = false;
  isIdNumRequired: boolean = true;

  profile = this.formbuilder.group({
    id: ['', [Validators.required]],
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
    customerid: ['', [Validators.required]]
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

  updateUser($event: Event) {
    $event.preventDefault();

    this.acnt[0].idtype = this.profile.get('idtype')?.value;
    this.acnt[0].idname = this.profile.get('idname')?.value;
    this.acnt[0].idnum = this.profile.get('idnum')?.value;
    this.acnt[0].cphone = this.profile.get('cphone')?.value;
    this.acnt[0].uaddress = (this.profile.get('address')!.value + ', ' + this.profile.get('state')!.value + ', ' + this.profile.get('zip')!.value + ', ' + this.profile.get('country')!.value);
    this.acnt[0].compregno = this.profile.get('creg')?.value;
    this.acnt[0].selfdeclation = this.profile.get('decl')?.value;

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
      Account: this.acnt[0],
      Zip: zipJson,
      Email: emailJson,
      Phone: phoneJson
    }

    this.appmodule.runGetCall('ACCOUNT', { data: [accountPayload] }).subscribe(
      data => {
        console.log(data['successMsg'])
      },
      error => { console.log(error) },
      () => { console.log('Done'); }
    )
  }

  ngOnInit(): void {
    this.appmodule.runGetCall('GET_ACCOUNT', {}).subscribe(
      data => {
        this.acnt = data['successMsg'];
        let adrLength = this.acnt[0].uaddress.split(',').length

        this.formData.country = this.acnt[0].uaddress.split(',')[adrLength - 1].trim();
        this.formData.idtype = this.acnt[0].idtype;

        this.profile.patchValue({ country: this.acnt[0].uaddress.split(',')[adrLength - 1].trim() });
        this.profile.patchValue({ state: this.acnt[0].uaddress.split(',')[adrLength - 3].trim() });
        this.profile.patchValue({ zip: Number(this.acnt[0].uaddress.split(',')[adrLength - 2]) });
        this.profile.patchValue({
          address: this.acnt[0].uaddress.split(',')
            .reduce(
              (prev, curr, index) => {
                return (index < adrLength - 3) ? prev = prev + curr : prev
              },
              ''
            )
        });
        this.profile.patchValue({ id: this.acnt[0].id });
        this.profile.patchValue({ customerid: this.acnt[0].customerid });
        this.profile.patchValue({ sex: 'NOT_DISCLOSD' });
        this.profile.patchValue({ name: this.acnt[0].fullname });
        this.profile.patchValue({ email: this.acnt[0].email });
        this.profile.patchValue({ phone: this.acnt[0].phone });
        this.profile.patchValue({ cemail: this.acnt[0].cemail });
        this.profile.patchValue({ cphone: this.acnt[0].cphone });
        this.profile.patchValue({ caddress: this.acnt[0].caddress });
        this.profile.patchValue({ cstate: this.acnt[0].cstate });
        this.profile.patchValue({ czip: this.acnt[0].czip });
        this.profile.patchValue({ idtype: this.acnt[0].idtype });
        this.profile.patchValue({ idname: this.acnt[0].idname });
        this.profile.patchValue({ idnum: this.acnt[0].idnum });
        this.profile.patchValue({ regtype: this.acnt[0].type });
        this.profile.patchValue({ creg: this.acnt[0].compregno });
        this.profile.patchValue({ cname: this.acnt[0].company });
        this.profile.patchValue({ cidnum: this.acnt[0].uniqbusidenno });
        this.profile.patchValue({ cidname: this.acnt[0].uniqbusidentype });
        this.profile.patchValue({ ccountry: this.acnt[0].buscountry });
        this.profile.patchValue({ decl: this.acnt[0].selfdeclation });
        this.profile.patchValue({ dob: this.acnt[0].dob });
      },
      error => { console.log(error) },
      () => { console.log('Done'); }
    )

  }
}