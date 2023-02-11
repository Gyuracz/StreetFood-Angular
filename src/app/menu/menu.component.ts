import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hamburger } from './hamburger.model';
import { MenuService } from './menu.service';
import { Pizza } from './pizza.model';
import { Salat } from './salat.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  pizzaModel!: Array<Pizza>;
  hamburgerModel!: Array<Hamburger>;
  salatModel!: Array<Salat>;

  constructor(private menuService: MenuService) {}

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
  }

}
