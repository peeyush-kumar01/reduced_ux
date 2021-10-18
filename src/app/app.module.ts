
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthGuard, AppService } from './app.service';
import {HttpClientModule} from '@angular/common/http';

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule,HttpClientModule],
  providers: [AuthGuard, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}