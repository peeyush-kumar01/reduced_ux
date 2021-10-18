
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { SecuritySettingComponent } from './security-setting/security-setting.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { CommunicationsComponent } from './communications/communications.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { DocumentInformationComponent } from './document-information/document-information.component';
import { SignInformationComponent } from './sign-information/sign-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './app.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/contact',
        component: ContactInformationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/address',
        component: AddressInformationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/document',
        component: DocumentInformationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/signin',
        component: SignInformationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/account',
        component: AccountInformationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/security',
        component: SecuritySettingComponent,
        canActivate: [AuthGuard],
      },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'invoice',
        component: InvoicesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'sr',
        component: ServiceRequestsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'comm',
        component: CommunicationsComponent,
        canActivate: [AuthGuard],
      },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}