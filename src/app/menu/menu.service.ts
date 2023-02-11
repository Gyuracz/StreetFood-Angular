import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';
import { Hamburger } from './hamburger.model';
import { Salat } from './salat.model';

export const API_BASE_URL_MENU = new InjectionToken<string>("API_BASE_URL_MENU");

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url: string;

  constructor(private http: HttpClient, @Optional() @Inject(API_BASE_URL_MENU) url: string) {
    this.url = url + "/menu";
  }

  getPizzas(): Observable<Array<Pizza>> {
    return this.http.get<Array<Pizza>>(this.url + "/getPizzas");
  }

  getHamburgers(): Observable<Array<Hamburger>> {
    return this.http.get<Array<Hamburger>>(this.url + "/getHamburgers");
  }

  getSalats(): Observable<Array<Salat>> {
    return this.http.get<Array<Salat>>(this.url + "/getSalats");
  }

}
