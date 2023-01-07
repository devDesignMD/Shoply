import { Component, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import {LinkInterface, MediaInterface} from "../../../ts/interfaces";
import {PageRoutes} from "../../../ts/enum";
import {BaseModule} from "../../../components/base/base.module";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, BaseModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  breadcrumb: LinkInterface[] = [
    {
      to: PageRoutes.Home,
      text: 'Home',
    },
    {
      to: PageRoutes.Products,
      text: 'Products',
    },
    {
      to: `${PageRoutes.Products}/${this.productId}`,
      text: 'Mouse',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  get productId(): number {
    return Number(this.route.snapshot.params['id']);
  }
  thumbs: MediaInterface[] = [
    {
      url: 'assets/images/mouse-product-1.png'
    },
    {
      url: 'assets/images/mouse-product-2.png'
    },
    {
      url: 'assets/images/mouse-product-3.png'
    },
    {
      url: 'assets/images/mouse-product-4.png'
    },

  ]


  ngOnInit(): void {
  }

}
