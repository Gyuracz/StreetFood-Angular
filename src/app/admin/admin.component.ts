import { Component, OnInit } from '@angular/core';
import { Hamburger } from '../menu/hamburger.model';
import { MenuService } from '../menu/menu.service';
import { Pizza } from '../menu/pizza.model';
import { Salat } from '../menu/salat.model';
import { AdminService } from './admin.service';
import { Subscriber } from './subscriber.model';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  pizzaModel!: Array<Pizza>;
  hamburgerModel!: Array<Hamburger>;
  salatModel!: Array<Salat>;
  subscriberModel!: Array<Subscriber>;
  pizzaForm!: FormGroup;
  hamburgerForm!: FormGroup;
  salatForm!: FormGroup;

  constructor(private menuService: MenuService, private adminService: AdminService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.menuService.getPizzas().subscribe(data => {
      this.pizzaModel = data;
    });
    this.menuService.getHamburgers().subscribe(data => {
      this.hamburgerModel = data;
    });
    this.menuService.getSalats().subscribe(data => {
      this.salatModel = data;
    });
    this.adminService.getSubscribers().subscribe(data => {
      this.subscriberModel = data;
    });
    this.pizzaForm = this.formBuilder.group({
      name: "",
      price: ""
    });
    this.hamburgerForm = this.formBuilder.group({
      name: "",
      price: ""
    });
    this.salatForm = this.formBuilder.group({
      name: "",
      price: ""
    });
  }

  submitPizzaForm(): void {
    const value = this.pizzaForm.value;
    this.adminService.addPizza(value).subscribe();
  }

  submitHamburgerForm(): void {
    const value = this.hamburgerForm.value;
    this.adminService.addHamburger(value).subscribe();
  }

  submitSalatForm(): void {
    const value = this.salatForm.value;
    this.adminService.addSalat(value).subscribe();
  }

  deleteSubscriber(id: number): void {
    this.adminService.deleteSubscriber(id).subscribe();
  }

  deletePizza(id: number): void {
    this.adminService.deletePizza(id).subscribe();
  }

  deleteHamburger(id: number): void {
    this.adminService.deleteHamburger(id).subscribe();
  }

  deleteSalat(id: number): void {
    this.adminService.deleteSalat(id).subscribe();
  }

}
