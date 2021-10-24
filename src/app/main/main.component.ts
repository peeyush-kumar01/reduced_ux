
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: any[] = [];
  filterTerm: any = '';

  CardProdObj: any = {};

  //this.filterTerm = event.target.value;


  getProduct(): any {
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_ALL_PRODUCTS).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByName(event :any): any { 
    var eValue=(event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value  ;                         
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

  getProductByCASNo(event :any): any {
    var eValue=(event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value  ;
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
  getProductByCatg(event :any): any {
    var eValue=(event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value  ;
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
  getProductByCntry(event :any): any {
    var eValue=(event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value  ;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_CNTRY_PRODUCTS+ eValue).toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByPtnr(event :any): any {
    var eValue=(event.target as HTMLElement).parentElement?.parentElement?.querySelector('input')?.value  ;
    const client = this.http.get<any>(AppModule.URL + AppModule.GET_PTNR_PRODUCTS+ eValue).toPromise();
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