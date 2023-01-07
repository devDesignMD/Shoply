import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {LinkInterface, ProductInterface} from "../../../ts/interfaces";
import {PageRoutes} from "../../../ts/enum";
import {BaseModule} from "../../../components/base/base.module";
import {ProductComponentsModule} from "../../../components/product-components/product-components.module";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  standalone: true,
  imports: [CommonModule, BaseModule,ProductComponentsModule ]
})
export class ProductsListComponent implements OnInit {


  breadcrumb: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.Products,
      text: 'Products',
    },
  ];

  products: ProductInterface[] = [
    {
      id: 1,
      imageUrl: 'assets/images/product-1.png',
      name: 'Logitech G102',
      price: '$32.00',
    },
    {
      id: 2,
      imageUrl: 'assets/images/product-2.png',
      name: 'Logitech G102',
      price: '$32.00',
    },
    {
      id: 3,
      imageUrl: 'assets/images/product-3.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
    {
      id: 4,
      imageUrl: 'assets/images/product-4.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
    {
      id: 5,
      imageUrl: 'assets/images/product-5.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
    {
      id: 6,
      imageUrl: 'assets/images/product-6.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
    {
      id: 7,
      imageUrl: 'assets/images/product-7.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
    {
      id: 8,
      imageUrl: 'assets/images/product-8.png',
      name: 'Logitech G102',
      price: '$32.00'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
