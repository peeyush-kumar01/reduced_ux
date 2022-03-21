
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactType, EmailType, PhoneType } from '../Objects';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
})
export class ContactInformationComponent implements OnInit {
  constructor(private appmodule: AppModule, private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getcontacts();

  }

  profileContactEdit = this.formbuilder.group({
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    country: ['', [Validators.required]],
    sex: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    mobile: [''],
    email: ['', [Validators.required, Validators.email]],
    id: ['', [Validators.required]],
    contactid: ['', [Validators.required]],
    status: ['', [Validators.required]]
  })

  contacts: any[] = []
  fetchContact!: any[]
  tempCon: any


  setTempCon(obj: any) {


    this.profileContactEdit.patchValue({ name: obj.contactName });
    this.profileContactEdit.patchValue({ type: obj.contactType });
    this.profileContactEdit.patchValue({ phone: obj.contactPhone });
    this.profileContactEdit.patchValue({ mobile: obj.contactMobile });
    this.profileContactEdit.patchValue({ name: obj.contactName });
    this.profileContactEdit.patchValue({ id: obj.Id });
    this.profileContactEdit.patchValue({ contactid: obj.contactId });
    this.profileContactEdit.patchValue({ sex: obj.contactSex });
    this.profileContactEdit.patchValue({ email: obj.contactEmail });
    this.profileContactEdit.patchValue({ status: obj.contactStatus });
    this.profileContactEdit.patchValue({ country: obj.contactCountry });

  }

  sexIcon: { [index: string]: string } = {
    MALE: 'male male',
    FEMALE: 'female female',
    OTHERS: 'smile other',
  };

  getIclass(contactType: any): string {
    return contactType.toLocaleLowerCase() == 'shipping'
      ? 'c-s'
      : contactType.toLocaleLowerCase() == 'billing'
        ? 'c-b'
        : contactType.toLocaleLowerCase() == 'primary'
          ? 'c-p'
          : '';
  }

  getcontacts(): void {
    this.appmodule.runGetCall('GET_CONTACT', {}).subscribe(
      (data) => {
        this.fetchContact = data['successMsg']
        this.fetchContact.forEach((conData: any) => {
          this.contacts.push({
            contactName: conData.Contact.name,
            contactId: conData.Contact.contactid,
            contactMobile: conData.Phone.mobile.split('-')[1],
            contactPhone: conData.Phone.phone.split('-')[1],
            contactEmail: conData.Email.email,
            contactType: conData.Contact.type,
            contactSex: conData.Contact.sex,
            contactCountry: conData.Contact.country,
            contactClass: this.getIclass(conData.Contact.type),
            Id: conData.Contact.id,
            conStatus: conData.Contact.status
          })

        })
      },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }

  putcontacts(): void {

    let con: ContactType = {
      id: '',
      contactid: '',
      name: (<HTMLInputElement>document.getElementById('nname')!).value,
      phonelist: '',
      emaillist: '',
      country: (<HTMLInputElement>document.getElementById('ncountry')!).value,
      sex: (<HTMLInputElement>document.getElementById('nsex')!).value,
      type: (<HTMLInputElement>document.getElementById('ntype')!).value,
      status: 'ACTIVE'
    }

    let email: EmailType = {
      id: '',
      eid: '',
      status: 'ACTIVE',
      email: (<HTMLInputElement>document.getElementById('nemail')!).value
    }

    let phone: PhoneType = {
      id: '',
      status: 'ACTIVE',
      pid: '',
      phone: (<HTMLInputElement>document.getElementById('ncountry')!).value + '-' + (<HTMLInputElement>document.getElementById('nphone')!).value,
      mobile: (<HTMLInputElement>document.getElementById('ncountry')!).value + '-' + (<HTMLInputElement>document.getElementById('nmobile')!).value
    }

    let conO = new Contact(con);
    conO.validateContact();

    this.appmodule.runGetCall('CONTACT', {
      data: [{
        Contact: con,
        Email: email,
        Phone: phone
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

  updateContact(event: Event): void {
    event.preventDefault();
    let tc = this.fetchContact.filter(obj => {

      return obj.Contact.contactid == this.profileContactEdit.get('contactid')?.value
    })
    tc[0].Contact.name = this.profileContactEdit.get('name')?.value
    tc[0].Contact.country = this.profileContactEdit.get('country')?.value
    tc[0].Contact.type = this.profileContactEdit.get('type')?.value
    tc[0].Contact.sex = this.profileContactEdit.get('sex')?.value

    if (!(
      tc[0].Phone.mobile == (
        this.profileContactEdit.get('country')?.value + '-' + this.profileContactEdit.get('mobile')?.value
      )
      &&
      tc[0].Phone.phone == (
        this.profileContactEdit.get('country')?.value + '-' + this.profileContactEdit.get('phone')?.value
      )
    )) {
      tc[0].Phone.mobile = this.profileContactEdit.get('country')?.value + '-' + this.profileContactEdit.get('mobile')?.value
      tc[0].Phone.phone = this.profileContactEdit.get('country')?.value + '-' + this.profileContactEdit.get('phone')?.value
      tc[0].Phone.id = ''
      tc[0].Phone.pid = ''
    }


    if (!tc[0].Email.email == this.profileContactEdit.get('email')?.value) {
      tc[0].Email.email = this.profileContactEdit.get('email')?.value
      tc[0].Email.id = ''
      tc[0].Email.eid = ''
    }
    let conO = new Contact(tc[0].Contact);
    conO.validateContact();

    this.appmodule.runGetCall('CONTACT', {
      data: [{
        Contact: tc[0].Contact,
        Email: tc[0].Email,
        Phone: tc[0].Phone
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
  deleteContact(): void {
    let tc = this.fetchContact.filter(obj => {
      return obj.Contact.contactid == this.profileContactEdit.get('contactid')?.value
    })
    
    tc[0].Contact.status = 'INACTIVE'
    this.appmodule.runGetCall('CONTACT', {
      data: [{
        Contact: tc[0].Contact,
        Email: tc[0].Email,
        Phone: tc[0].Phone
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
}