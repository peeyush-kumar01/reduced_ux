
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommunicationType } from '../Objects';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private appmodule: AppModule) { }

  ngOnInit(): void { }

  sectionDetail: { [index: string]: string } = {
    header: '',
    detail: '',
  };

  subscriptionForm = this.formbuilder.group({
    semail: ['', [Validators.email, Validators.required]]
  })

  setContactDetail(): void {
    this.sectionDetail.header = 'Contact Detail';
    this.sectionDetail.detail = '<b>Registered Office:</b><br/>Prasi Labs Pvt Ltd \
    <br/>Plot No : 4/2,Sector 1 RAM SVR, \
    <br/>HUDA Techno Enclave, HITEC City, \
    <br/>Madhapur, Telangana 500081 \
    <br/>Bharat (India) \
    <hr/> \
    <b>Email:</b><br/> \
    <a href="mailto:info@prasilabs.com?Subject=Enquirey%20'+ Date.now() + '" target="_top">info@prasilabs.com</a>\
    ';
  }

  setAboutDetail(): void {
    this.sectionDetail.header = 'About US';
    this.sectionDetail.detail = '<p>\
    <b>We’ve made a unique Platform that will help you</b>\
    <br/>Prasi Labs has been adjudged as High Growth Company at blooming stage,\
    founded in 2020, with a holistic approach to sales and marketing combined\
    with exemplified industry experience. Prasi Labs amplifies reach across \
    several Pharma companies across the Globe. Prasi Labs with its streamlined \
    business approach has been successful in accomplishing a reputed client \
    list in a very short span of time.\
    <br/><br/>Let Prasi Labs introduce you to a better, yet transparent way of conducting \
    business.  We are here to bring value with new way of sourcing & development \
    on our client’s requirement.\
    </p>';
  }

  setFeedbackDetail(): void {
    this.sectionDetail.header = 'Write to us';
    this.sectionDetail.detail = '<p>This is my contact please mail</p>';
  }

  setCopywriteDetail(): void {
    this.sectionDetail.header = 'Copywrite Information';
    this.sectionDetail.detail = 'Copyright © 2021 Prasi Labs Pvt ltd \
    <br/><hr/><br/>ISO 9001:2015 Certified Company';
  }

  setMapDetail(): void {
    this.sectionDetail.header = 'Hyderabad India';
    this.sectionDetail.detail = '<b>US</b>'
  }

  submitSubs(event: Event): void {
    event.preventDefault();

    let comm: CommunicationType = {
      id: '',
      commid: '',
      type: 'SUBSCRIPTION',
      user: this.subscriptionForm.get('semail')?.value,
      message: 'Please add me to the newsletter subscription.',
      accntid: this.subscriptionForm.get('semail')?.value,
      updated: new Date().toISOString()
    }

    this.appmodule.runGetCall('COMM', { Communication: comm }).subscribe(
      (data) => { if (data['successMsg']) { alert('Subscription request sent.') } },
      (error => { console.log(error); alert('Something wrong happened. Please try again.') }),
      () => { console.log('Done'); this.subscriptionForm.reset() }
    )
  }
}