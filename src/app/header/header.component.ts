
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'PRASI Labs';
  constructor(private sanitizer: DomSanitizer, private router: Router, private appmodule: AppModule) { }
  isCollapsed = true;
  isModel = true;
  isModel1 = true;
  sectionDetail: { [index: string]: string | SafeHtml } = {
    header: '',
    detail: '',
  };
  isLoggedIn(): boolean {
    return AppModule.IS_LOGGED_IN;
  }
  home(): void {
    if (this.isLoggedIn()) {
      if (sessionStorage.getItem('adminUser'))
        this.router.navigateByUrl('/administratorurlhidden/admindashboard/adminhome');
      else
        this.router.navigateByUrl('/dashboard/home');
    }
  }
  logout(): void {
    this.appmodule.runGetCall('LOGOUT', {
      'currentUser': sessionStorage.getItem('currentUser')
      , 'adminUser': sessionStorage.getItem('adminUser')
    }).subscribe(
      data => {
        if (data['successMsg']) {
          sessionStorage.removeItem('currentUser');
          sessionStorage.removeItem('adminUser');
          if (sessionStorage.getItem('currentUser') || sessionStorage.removeItem('adminUser')) {
            alert('Browser cache is not cleared. Please close your tab and reopen to logout.');
          }
          AppModule.IS_LOGGED_IN = false;
          this.router.navigateByUrl('/');
        }else{
          sessionStorage.removeItem('currentUser');
          sessionStorage.removeItem('adminUser');
          alert('Logout was not fully successfull. Please re-login.');
          this.router.navigateByUrl('/login');
        }
      },
      error => {
        console.log(error);

        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('adminUser');

        alert('Logout was not successfull. However you can do the fresh login.');

      },
      () => {
        console.log('Logout done');
      }
    )


  }
  submitFeedback(): void {
    this.isModel1 = true;
  }
  setContactDetail(): void {
    this.sectionDetail.header = 'Contact Detail';
    this.sectionDetail.detail = '<b>Registered Office:</b><br/>Prasi Labs Pvt Ltd \
    <br/>Plot No : 3647,Sai Krishana Layout, \
    <br/>Near Pragati Nagar Arch, Pragati Nagar, \
    <br/>Hyderabad, Telangana - 500090 \
    <br/>Bharat (India) \
    <hr/> \
    <b>Email:</b><br/> \
    <a href="mailto:info@prasilabs.com?Subject=Enquirey%20'+ Date.now() + '" target="_top">info@prasilabs.com</a>\
    ';
    this.isModel = false;
    this.isModel1 = true;
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
    this.isModel = false
    this.isModel1 = true;
  }

  setFeedbackDetail(): void {
    this.sectionDetail.header = 'Write to us';
    this.sectionDetail.detail = ''
    this.isModel = true;
    this.isModel1 = false;
  }

  setTnCDetail(): void {
    this.sectionDetail.header = 'Terms and Conditions';
    this.sectionDetail.detail = 'Please get in touch with us to have detailed information.';
    this.isModel = false
    this.isModel1 = true;
  }

  setMapDetail(): void {
    this.sectionDetail.header = 'Hyderabad India';
    let map = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3241258629155!2d78.3914563143355!3d17.539748303010825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910c675daef9%3A0x5afcb3e5f5e2c241!2sPrasi%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1639756282576!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `;
    this.isModel = false
    this.isModel1 = true;
    this.sectionDetail.detail = this.sectionDetail.detail = this.sanitizer.bypassSecurityTrustHtml(map);
  }

  ngOnInit(): void {
  }

}