
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, AppService } from './app.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginDirective } from './login/login.directive';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { SecuritySettingComponent } from './security-setting/security-setting.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { CommunicationsComponent } from './communications/communications.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { SignInformationComponent } from './sign-information/sign-information.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { DocumentInformationComponent } from './document-information/document-information.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PrincipalComponent } from './principal/principal.component';
import { OfferingComponent } from './offering/offering.component';
import { Observable, Subscription } from 'rxjs';
import { NumToWordPipe } from './num-to-word.pipe';
import { AdminComponent } from './admin/admin.component';
import { CustomerinformationComponent } from './admin/customerinformation/customerinformation.component';
import { OrderinformationComponent } from './admin/orderinformation/orderinformation.component';
import { ProductinformationComponent } from './admin/productinformation/productinformation.component';
import { InvoiceinfoComponent } from './admin/invoiceinfo/invoiceinfo.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { SrinfoComponent } from './admin/srinfo/srinfo.component';
import { CominfoComponent } from './admin/cominfo/cominfo.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDirective,
    MessagesComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AccountInformationComponent,
    SecuritySettingComponent,
    OrdersComponent,
    InvoicesComponent,
    ServiceRequestsComponent,
    CommunicationsComponent,
    HeaderComponent,
    FooterComponent,
    ContactInformationComponent,
    SignInformationComponent,
    AddressInformationComponent,
    DocumentInformationComponent,
    CartComponent,
    UserComponent,
    MainComponent,
    PageNotFoundComponent,
    SearchFilterPipe,
    PrincipalComponent,
    OfferingComponent,
    NumToWordPipe,
    AdminComponent,
    CustomerinformationComponent,
    OrderinformationComponent,
    ProductinformationComponent,
    InvoiceinfoComponent,
    AdminprofileComponent,
    SrinfoComponent,
    CominfoComponent,
    TasksComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminhomeComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgbModule, HttpClientModule, MdbAccordionModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule, BrowserAnimationsModule],
  providers: [AuthGuard, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private appservice: AppService) {
  };

  static readonly URL = 'http://localhost:3000';
  static readonly GET_ALL_PRODUCTS = '/getoffering/all';
  static readonly GET_NAME_PRODUCTS = '/getoffering/name/';
  static readonly GET_CASNO_PRODUCTS = '/getoffering/casno/';
  static readonly GET_CATG_PRODUCTS = '/getoffering/category/';
  static readonly GET_CNTRY_PRODUCTS = '/getoffering/country/';
  static readonly GET_PTNR_PRODUCTS = '/getoffering/partner/';
  static readonly GET_SEARCH_PRODUCTS = '/getoffering/search/'
  static readonly GET_LST_PTNR = '/partnerlist'
  static readonly GET_LST_CNTRY = '/getcountrylist'
  static readonly GET_LST_CATG = '/categorylist'
  static readonly POST_LOGIN_SERVICE = '/login'
  static readonly POST_LOGOUT_SERVICE = '/logout'
  static readonly GET_LST_CRNCY = '/getcurrencylist'
  static readonly POST_ACCOUNT_SERVICE = '/account'
  static readonly POST_CONTACT_SERVICE = '/contact'
  static readonly POST_ADDRESS_SERVICE = '/address'
  static readonly POST_COMMUNICATION_SERVICE = '/communication'
  static readonly POST_SR_SERVICE = '/sr'
  static readonly POST_INVOICE_SERVICE = '/invoice'
  static readonly POST_USER_SERVICE = '/user'
  static readonly GET_ACCOUNT_SERVICE = '/account'
  static readonly GET_CONTACT_SERVICE = '/contact'
  static readonly GET_ADDRESS_SERVICE = '/address'
  static readonly GET_EMAIL_SERVICE = '/email'
  static readonly GET_PHONE_SERVICE = '/phone'
  static readonly GET_COMMUNICATION_SERVICE = '/communication'
  static readonly GET_SR_SERVICE = '/sr'
  static readonly GET_INVOICE_SERVICE = '/invoice'

  static IS_LOGGED_IN: boolean;
  static LST_PTNR: Array<string> = [];
  static LST_CATG: Array<string> = [];
  static LST_CNTRY: Array<string> = [];
  static LST_CRNCY: Array<string> = [];
  static CART_LST: Array<any> = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'my-auth-token'
    })
  };

  runGetCall(path: string, search: any): Observable<any> {
    switch (path) {
      case 'ALL_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_ALL_PRODUCTS + search, this.httpOptions)
      case 'SEARCH_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_SEARCH_PRODUCTS + search, this.httpOptions)
      case 'NAME_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_NAME_PRODUCTS + search, this.httpOptions)
      case 'CASNO_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CASNO_PRODUCTS + search, this.httpOptions)
      case 'CATG_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CATG_PRODUCTS + search, this.httpOptions)
      case 'CNTRY_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_CNTRY_PRODUCTS + search, this.httpOptions)
      case 'PTNR_PRODUCT':
        return this.appservice.getData(AppModule.URL + AppModule.GET_PTNR_PRODUCTS + search, this.httpOptions)
      case 'PTNR':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_PTNR + search, this.httpOptions)
      case 'CATG':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CATG + search, this.httpOptions)
      case 'CNTRY':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CATG + search, this.httpOptions)
      case 'LOGIN':
        return this.appservice.postData(AppModule.URL + AppModule.POST_LOGIN_SERVICE, search, this.httpOptions)
      case 'LOGOUT':
        return this.appservice.postData(AppModule.URL + AppModule.POST_LOGOUT_SERVICE, search, this.httpOptions)
      case 'CRNCY':
        return this.appservice.getData(AppModule.URL + AppModule.GET_LST_CRNCY + search, this.httpOptions)
      case 'CREATE_ACCOUNT':
        return this.appservice.postData(AppModule.URL + AppModule.POST_ACCOUNT_SERVICE, search, this.httpOptions)
      default:
        return new Observable<any>()
    }
  }
}