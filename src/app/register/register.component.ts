import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {

  constructor(private formbuilder: FormBuilder, private appmodule: AppModule) { }
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
    sex: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    country: ['', [Validators.required]],
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
    creg: ['']
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
    let body = this.profile.value;
    this.appmodule.runGetCall('CREATE_ACCOUNT', body).subscribe(
      data => { console.log(data['successMsg']) },
      error => { console.log(error) },
      () => { console.log('Done'); }
    )
  }
  ngOnInit(): void {

  }

}
