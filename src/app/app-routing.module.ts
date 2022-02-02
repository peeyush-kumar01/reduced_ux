
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
import { AuthGuard,AdminAuthGuard } from './app.service';
import { PrincipalComponent } from './principal/principal.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { CominfoComponent } from './admin/cominfo/cominfo.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { InvoiceinfoComponent } from './admin/invoiceinfo/invoiceinfo.component';
import { SrinfoComponent } from './admin/srinfo/srinfo.component';
import { CustomerinformationComponent } from './admin/customerinformation/customerinformation.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { OrderinformationComponent } from './admin/orderinformation/orderinformation.component';
import { ProductinformationComponent } from './admin/productinformation/productinformation.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: PrincipalComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  {
    path: 'administratorurlhidden',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminloginComponent,
        pathMatch: 'full'
      },
      {
        path: 'admindashboard',
        component: AdmindashboardComponent,
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: 'adminhome',
            component: AdminhomeComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'adminprofile',
            component: AdminprofileComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'customerinfo',
            component: CustomerinformationComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'productinfo',
            component: ProductinformationComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'invoiceinfo',
            component: InvoiceinfoComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'comminfo',
            component: CominfoComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'adminprofile/account',
            component: AccountInformationComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'adminprofile/security',
            component: SecuritySettingComponent,
            canActivate: [AdminAuthGuard],
          },
          {
            path: 'orderinfo',
            component: OrderinformationComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'srinfo',
            component: SrinfoComponent,
            canActivate: [AdminAuthGuard]
          },
          {
            path: 'task',
            component: TasksComponent,
            canActivate: [AdminAuthGuard],
          },
        ],
      },
    ]

  },
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
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
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
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }