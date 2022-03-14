
import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { ContactType, EmailType, PhoneType } from '../Objects';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
})
export class ContactInformationComponent implements OnInit {
  constructor(private appmodule: AppModule) {
   
  }

  ngOnInit(): void {
    this.getcontacts();
    this.getIclass();
  }

  contactUi: { [index: string]: any } = {
    contactName: '',
    contactId: '',
    contactMobile: '',
    contactPhone: '',
    contactEmail: '',
    contactType: '',
    contactSex: '',
    contactClass:''
  }

  contacts: any[] = []


  sexIcon: { [index: string]: string } = {
    MALE: 'male male',
    FEMALE: 'female female',
    OTHER: 'smile other',
  };

  getIclass(): void {
    this.contacts.forEach((element) => {
      element.contactType.toLocaleLowerCase() == 'shipping'
        ? (element.contactClass = 'c-s')
        : element.contactType.toLocaleLowerCase() == 'billing'
          ? (element.contactClass = 'c-b')
          : element.contactType.toLocaleLowerCase() == 'primary'
            ? (element.contactClass = 'c-p')
            : '';
    });
  }

  getcontacts(): void {
    this.appmodule.runGetCall('GET_CONTACT', {}).subscribe(
      (data) => {

        data['successMsg'].forEach((conData: any) => {
          this.contactUi.contactName = conData.Contact.name
          this.contactUi.contactId = conData.Contact.contactid
          this.contactUi.contactMobile = conData.Phone.mobile
          this.contactUi.contactPhone = conData.Phone.phone
          this.contactUi.contactEmail = conData.Email.email
          this.contactUi.contactType = conData.Contact.type
          this.contactUi.contactSex = conData.Contact.sex
        })
        this.contacts.push(this.contactUi)

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
      country: null,
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
      phone: (<HTMLInputElement>document.getElementById('nphone')!).value,
      mobile: (<HTMLInputElement>document.getElementById('nmobile')!).value
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
      (data) => { console.log(data['successMsg']) },
      (error) => { console.log(error) },
      () => { console.log('Done') }
    )
  }
}