
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { updateDecorator } from 'typescript';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: any[] = [1];

  CardProdObj: any={};


  getProduct(): any {
    const client = this.http.get<any>('http://localhost:3000/getoffering/all').toPromise();
    return client.then(
      (response: any) => {
        this.products = response;
        console.log(response);
      }
    )
      .catch((error: any) => {
        console.log(error);
      })
  }

  getProductByName(): any {
    console.log();
  }

  getProductByCASNo(): any {

  }
  getProductByCatg(): any {

  }
  getProductByCntry(): any {

  }

  getProductByPtnr(): any {

  }

  setCurObj(obj: any) {
    this.CardProdObj=obj;
  }

  ngOnInit(): void {
    this.getProduct();}
}