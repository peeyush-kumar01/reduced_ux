
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from '../app.module';
import { MessagesComponent } from '../messages/messages.component';
import { Product } from '../products';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class MainComponent implements OnInit {
  location: Location;
  constructor(private http: HttpClient, location: Location) {
    this.location = location;
  }

  products: Product[] = [];
  filterTerm: any = '';
  CardProdObj: any = {};

  //this.filterTerm = event.target.value;

  goBack(): any {
    this.location.historyGo(0);
    return false;
  }
  getProduct(): any {
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_ALL_PRODUCTS).toPromise();
    return client.then(
      (response: any) => {
        this.products = response['successMsg'];
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByName(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    MessagesComponent.setErrormessage(eValue, 'Please enter some search criteria');
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_NAME_PRODUCTS + eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByCASNo(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_CASNO_PRODUCTS + eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }
  getProductByCatg(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_CATG_PRODUCTS + eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }
  getProductByCntry(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_CNTRY_PRODUCTS + eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByPtnr(event: any): any {
    var eValue = (event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_PTNR_PRODUCTS + eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  setCurObj(obj: any) {
    this.CardProdObj = obj;
  }

  ngOnInit(): void {
    this.getProduct();
  }
}