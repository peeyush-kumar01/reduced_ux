
import { Component, DoCheck, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { AddToCart } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  totalPrice: number;
  totalTax: number;
  totalDiscount: number;
  payblePrice: number;
  currency = AppModule.LST_CRNCY;
  cartItem: Array<any>;
  constructor(private cartservice: AddToCart) {
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalTax = 0;
    this.payblePrice = 0;
    this.cartItem=AppModule.CART_LST;
  }

  calculateCart(item: Array<any>) {
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.totalTax = 0;
    this.payblePrice = 0;
    item.map((obj => {
      this.totalPrice = this.totalPrice + parseFloat(obj.price);
      this.totalDiscount = this.totalDiscount + parseFloat(obj.discount);
      this.totalTax = this.totalTax + parseFloat(obj.tax);
      this.payblePrice = this.totalTax + this.totalPrice - this.totalDiscount;
    }))

  }

  removeItem(itemNum: number): void {
    AppModule.CART_LST.splice(itemNum, 1);
  }


  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.calculateCart(this.cartItem);
  }

}
