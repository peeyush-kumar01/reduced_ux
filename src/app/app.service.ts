
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) { }

  getData(url: string, options: object): Observable<any> {
    return this.http.get(url, options);
  }

  postData(url: string, body: any, options: object): Observable<any> {
    return this.http.post(url, body, options);
  }
}

@Injectable({
  providedIn: 'root',
})
export class AddToCart {
  private _cart = new Subject();
  cart$ = this._cart.asObservable();
  addtocart(item: any) {
    this._cart.next(item);
  }
}
