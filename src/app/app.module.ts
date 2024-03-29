
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginDirective } from './login/login.directive';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PrincipalComponent } from './principal/principal.component';
import { OfferingComponent } from './offering/offering.component';
import { Observable, Subscription } from 'rxjs';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { AtomComponent } from './atom/atom.component';
import { NgChartsModule } from 'ng2-charts';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDirective,
  
    ProfileComponent,

    HeaderComponent,
    FooterComponent,
  
    MainComponent,
    PageNotFoundComponent,
    SearchFilterPipe,
    PrincipalComponent,
    OfferingComponent,

    RegisterComponent,
    AtomComponent,
 
  ],
  imports: [NgxPaginationModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgbModule, HttpClientModule, MdbAccordionModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule, BrowserAnimationsModule, NgChartsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private appservice: AppService) {
  };

  //Base url
  static readonly URL = 'http://localhost:3000';
  // end point to get all active products
  static readonly GET_ALL_PRODUCTS = '/getoffering/all';
  //end point to get login list
  static readonly GET_LOGIN_LIST = '/loginlist'
  //end point to get all products for admin users
  static readonly GET_ADMIN_ALL_PRODUCTS = '/getoffering/admin/all';
  //end point to get product searched using product name
  static readonly GET_NAME_PRODUCTS = '/getoffering/name/';
  //end point to get product searched using product cas number
  static readonly GET_CASNO_PRODUCTS = '/getoffering/casno/';

  //end point to get product searched using product category
  static readonly GET_CATG_PRODUCTS = '/getoffering/category/';
  //end point to get product searched using product sourced country
  static readonly GET_CNTRY_PRODUCTS = '/getoffering/country/';
  //end point to get product searched using our partners
  static readonly GET_PTNR_PRODUCTS = '/getoffering/partner/';
  //end point to get product searched using any search criteria
  static readonly GET_SEARCH_PRODUCTS = '/getoffering/search/'

  // end point to get patner list from lov. must be loaded while aplication initialization
  static readonly GET_LST_PTNR = '/partnerlist'
  // end point to get country list from lov. must be loaded while aplication initialization
  static readonly GET_LST_CNTRY = '/getcountrylist'
  // end point to get category list from lov. must be loaded while aplication initialization
  static readonly GET_LST_CATG = '/categorylist'
  // end point to validate login
  static readonly POST_LOGIN_SERVICE = '/login'
  // end point to validate logut
  static readonly POST_LOGOUT_SERVICE = '/logout'
  // end point to get currency list from lov. must be loaded while aplication initialization
  static readonly GET_LST_CRNCY = '/getcurrencylist'

  // end point for user's account management
  static readonly POST_ACCOUNT_SERVICE = '/account'
  // end point for user's contact management
  static readonly POST_CONTACT_SERVICE = '/contact'
  // end point for user's address management
  static readonly POST_ADDRESS_SERVICE = '/address'
  // end point for user's feedback or any enquiry
  static readonly POST_COMMUNICATION_SERVICE = '/commany'
  // end point for user's service request management
  static readonly POST_SR_SERVICE = '/sr'
  // end point for invoice management by administrator
  static readonly POST_INVOICE_SERVICE = '/invoice'

  // end point for user's password management and administator's user management
  static readonly POST_USER_SERVICE = '/user'
  // end point for product management by administrator
  static readonly POST_PRODUCT_SERVICE = '/product'
  // end point to get user's account details.
  static readonly GET_ACCOUNT_SERVICE = '/accountlist'
  // end point to get user's contact details.
  static readonly GET_CONTACT_SERVICE = '/contactlist'
  // end point to get user's address details.
  static readonly GET_ADDRESS_SERVICE = '/addresslist'
  // end point to get user's communication details.
  static readonly GET_COMMUNICATION_SERVICE = '/communication'
  // end point to get user's service request details.

  static readonly GET_SR_SERVICE = '/srlist'
  // end point to get user's invoice details.
  static readonly GET_INVOICE_SERVICE = '/invoicelist'
  // end point to get user's documents detail
  static readonly GET_DOC_SERVICE = '/doc'
  // end point to get exchange rates from lov. Must be loaded while aplication initialization
  static readonly GET_XCHANGE_RATE = '/xchange'
  //endpoint to get gst
  static readonly GET_GST_LIST = '/gstmap'
  //end point to create orders
  static readonly POST_ORDER_SERVICE = '/order'
  // end point to get user's order details.
  static readonly GET_ORDER_SERVICE = '/orderlist'

  //get stat
  static readonly GET_STAT = '/stat'
  //getGST
  static readonly GET_ADMIN_GST = '/getGST'
  //getLOV
  static readonly GET_ADMIN_LOV = '/getLovAdmin'

  //postLOV
  static readonly POST_ADMIN_LOV = '/postLovAdmin'
  //gpostexchange
  static readonly POST_ADMIN_XCHANGE = '/postXchangeAdmin'
  //post gst
  static readonly POST_ADMIN_GST = '/postGSTAdmin'


  static readonly GET_DATA_ORDERS = '/adminDataOrders'
  static readonly GET_DATA_INVOICE = '/adminDataInvoice'
  static readonly GET_DATA_LEDGER = '/adminDataLedger'

  static readonly POST_DATA_EMAIL = '/sendemail'

  static IS_LOGGED_IN: boolean;
  static LST_PTNR: Array<string> = [];
  static LST_CATG: Array<string> = [];
  static LST_CNTRY: Array<string> = [];
  static LST_CRNCY: Array<string> = [];
  static CART_LST: Array<any> = [];
  static LST_XCHANGE: { [index: string]: any } = {};
  static LST_GST: { [index: string]: any } = {};
  static USR: any = {}

  static LOGIN_TOEKN = ''
  static API_TOEKN = ''

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };


  private System = {
    action: "",
    user: "",
    logintoken: "",
    apitoken: "",
    id: ""
  }

  private setSystemTagValues = (): void => {

    this.System.user = JSON.parse(
      sessionStorage.getItem('currentUser') ? sessionStorage.getItem('currentUser')! :
        sessionStorage.getItem('adminUser') ? sessionStorage.getItem('adminUser')! : JSON.stringify({ user: '' })
    ).userid;

    this.System.logintoken = JSON.parse(
      sessionStorage.getItem('currentUser') ? sessionStorage.getItem('currentUser')! :
        sessionStorage.getItem('adminUser') ? sessionStorage.getItem('adminUser')! : JSON.stringify({ logintoken: '' })
    ).logintoken;

    this.System.apitoken = JSON.parse(
      sessionStorage.getItem('currentUser') ? sessionStorage.getItem('currentUser')! :
        sessionStorage.getItem('adminUser') ? sessionStorage.getItem('adminUser')! : JSON.stringify({ apitoken: '' })
    ).apitoken;

    this.System.id = JSON.parse(
      sessionStorage.getItem('currentUser') ? sessionStorage.getItem('currentUser')! :
        sessionStorage.getItem('adminUser') ? sessionStorage.getItem('adminUser')! : JSON.stringify({ id: '' })
    ).id;


  }


  runGetCall(path: string, search: any): Observable<any> {
    this.setSystemTagValues();
    switch (path) {
      case 'ALL_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_ALL_PRODUCTS + search, this.httpOptions)

      case 'ADMIN_ALL_PRODUCT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ADMIN_ALL_PRODUCTS, search, this.httpOptions)

      case 'SEARCH_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_SEARCH_PRODUCTS + search, this.httpOptions)

      case 'NAME_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_NAME_PRODUCTS + search, this.httpOptions)

      case 'CASNO_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CASNO_PRODUCTS + search, this.httpOptions)

      case 'CATG_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CATG_PRODUCTS + search, this.httpOptions)

      case 'GST':
        return this.appservice.getData(AppModule.URL + AppModule.GET_GST_LIST + search, this.httpOptions)

      case 'CNTRY_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CNTRY_PRODUCTS + search, this.httpOptions)

      case 'PTNR_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_PTNR_PRODUCTS + search, this.httpOptions)

      case 'PTNR':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_PTNR + search, this.httpOptions)

      case 'CATG':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CATG + search, this.httpOptions)

      case 'CNTRY':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CNTRY + search, this.httpOptions)

      case 'LOGIN':
        if (this.System.logintoken == "") {
          this.System.action = 'loginpassword'
          this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
          this.httpOptions.headers = this.httpOptions.headers.append('Authorization', search['password']);
        } else {
          this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
          this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.logintoken);
        }
        search['System'] = this.System;
        search['System'].user = search['userid']

        return this.appservice.postData(AppModule.URL + AppModule.POST_LOGIN_SERVICE, search, this.httpOptions)

      case 'LOGOUT':
        this.System.action = 'logout'
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_LOGOUT_SERVICE, search, this.httpOptions)

      case 'CRNCY':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CRNCY + search, this.httpOptions)

      case 'XCHANGE':
        return this.appservice.getData(AppModule.URL + AppModule.GET_XCHANGE_RATE + search, this.httpOptions)

      case 'GET_ACCOUNT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ACCOUNT_SERVICE, search, this.httpOptions)

      case 'GET_CONTACT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_CONTACT_SERVICE, search, this.httpOptions)

      case 'GET_ADDRESS':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ADDRESS_SERVICE, search, this.httpOptions)

      case 'GET_ORDER':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ORDER_SERVICE, search, this.httpOptions)

      case 'GET_STAT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_STAT, search, this.httpOptions)

      case 'GET_COMM':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_COMMUNICATION_SERVICE, search, this.httpOptions)

      case 'GET_SR':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_SR_SERVICE, search, this.httpOptions)

      case 'GET_INVOICE':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_INVOICE_SERVICE, search, this.httpOptions)

      case 'GET_LOGINLIST':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_LOGIN_LIST, search, this.httpOptions)

      case 'ACCOUNT':
        if (this.System.user && this.System.user.indexOf('PSUSR') != -1) {
          this.System.action = 'update'
        }
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ACCOUNT_SERVICE, search, this.httpOptions)

      case 'PRODUCT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_PRODUCT_SERVICE, search, this.httpOptions)

      case 'USER':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_USER_SERVICE, search, this.httpOptions)

      case 'CONTACT':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_CONTACT_SERVICE, search, this.httpOptions)

      case 'ADDRESS':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ADDRESS_SERVICE, search, this.httpOptions)

      case 'ORDER':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ORDER_SERVICE, search, this.httpOptions)

      case 'SR':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_SR_SERVICE, search, this.httpOptions)

      case 'COMM':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_COMMUNICATION_SERVICE, search, this.httpOptions)

      case 'GET_ADMIN_GST':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ADMIN_GST, search, this.httpOptions)

      case 'GET_ADMIN_LOV':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.GET_ADMIN_LOV, search, this.httpOptions)

      case 'POST_LOV_ADMIN':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ADMIN_LOV, search, this.httpOptions);

      case 'POST_XCHANGE':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ADMIN_XCHANGE, search, this.httpOptions);

      case 'POST_GST':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_ADMIN_GST, search, this.httpOptions);

      case 'POST_DATA_EMAIL':
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', this.System.apitoken);
        search['System'] = this.System;
        return this.appservice.postData(AppModule.URL + AppModule.POST_DATA_EMAIL, search, this.httpOptions);

      default:
        return new Observable<any>()
    }
  }
}