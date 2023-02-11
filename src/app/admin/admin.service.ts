import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Hamburger } from '../menu/hamburger.model';
import { Pizza } from '../menu/pizza.model';
import { Salat } from '../menu/salat.model';
import { Subscriber } from './subscriber.model';

export const API_BASE_URL_ADMIN = new InjectionToken<string>("API_BASE_URL_ADMIN");

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url: string;

  constructor(private http: HttpClient, @Optional() @Inject(API_BASE_URL_ADMIN) url: string) {
    this.url = url + "/admin";
  }

  getSubscribers(): Observable<Array<Subscriber>> {
    return this.http.get<Array<Subscriber>>(this.url + "/getSubscribers");
  }

  addSubscriber(sub: Subscriber): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      })
    };
    return this.http.post(this.url + "/addSubscriber", JSON.stringify(sub), options);
  }

  addPizza(pizza: Pizza): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      })
    };
    return this.http.post(this.url + "/addPizza", JSON.stringify(pizza), options);
  }

  addHamburger(hamburger: Hamburger): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      })
    };
    return this.http.post(this.url + "/addHamburger", JSON.stringify(hamburger), options);
  }

  addSalat(salat: Salat): Observable<Object> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json"
      })
    };
    return this.http.post(this.url + "/addSalat", JSON.stringify(salat), options);
  }

}
