
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
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }


}

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('adminUser')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/administratorurlhidden'], { queryParams: { returnUrl: state.url } });
    return false;
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