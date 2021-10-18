
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  products: any[] = [1];

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


  ngOnInit(): void {
    this.getProduct();
  }

}